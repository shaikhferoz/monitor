Detailed steps to create a python gRPC backend that can be reached by a gRPC client:

cd monitor/backend
$ python -V
Python 3.9.4

1. Install, Create & Activate virtualenv:
python -m pip install virtualenv
python -m virtualenv venv
source venv/Scripts/activate

2. Install python-grpc dependencies:
python -m pip install grpcio grpcio-tools

3. Create the proto file for your service:
mkdir protos
vim protos/dashboard.proto

4. Create the protoc files:
cd backend
python -m grpc_tools.protoc --proto_path=../protos/ ../protos/dashboard.proto --python_out=. --grpc_python_out=.

5. Build server.py

6. Build test_client.py
    
7. Ensure you can communicate from client.py to server.py

8. Building the frontend using react
npx create-react-app ui

9. Ensure you have protoc-gen-grpc-web & grpc-web installed.
cd frontend/ui

npm i protoc protoc-gen-grpc-web
Add to paths protoc and protoc-gen-grpc-web

10. Use the same proto file to generate JS proto code:
cd frontend  

protoc --proto_path=../protos/ ../protos/dashboard.proto \
--js_out=import_style=commonjs,binary:./protoc_generated \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./protoc_generated


11. Create and run the envoy proxy for HTTP v1 to v2 conversion:
mkdir envoy
cd envoy/
vim envoy.yaml
vim Dockerfile

12. Build and run envoy as proxy:
docker build -t grpc-web-react .
docker run -d --name grpc-web-react -p 8080:8080 -p 9901:9901 grpc-web-react

13. Install more client dependencies:
npm install grpc-web --save
npm install google-protobuf --save

14. Modify the app.js file to create new gRPC client:
import { DashboardRequest } from './protoc_generated/dashboard_pb'
import { DashboardClient } from './protoc_generated/dashboard_grpc_web_pb' 

// Main grpc client:
var client = new DashboardClient('http://localhost:8080')
