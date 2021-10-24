import logging
import grpc
from protoc_generated import dashboard_pb2
from protoc_generated import dashboard_pb2_grpc

# Global vars:
logging.basicConfig(level=logging.DEBUG)
LOGGER = logging.getLogger(__name__)

class DashboardClient(object):
    """
    Client for gRPC functionality
    """

    def __init__(self):
        self.host = 'localhost'
        self.server_port = 50051

        # instantiate a channel
        # self.channel = grpc.insecure_channel(f'{self.host}:{self.server_port}',
        #                             options=(('grpc.enable_http_proxy', 0),))
        self.channel = grpc.insecure_channel('localhost:50051')
        LOGGER.info(f"Channel connecting to {self.host}:{self.server_port} ready: {self.channel}")

        # bind the client and the server
        self.stub = dashboard_pb2_grpc.DashboardStub(self.channel)
        LOGGER.info(f"Stub ready: {self.stub}")


    def get_dashboard(self, dashboard_id):
        """
        Client function to call the rpc for GetDashboard
        """
        response = self.stub.GetDashboard(dashboard_pb2.DashboardRequest(id=dashboard_id))
        return response


if __name__ == '__main__':
    client = DashboardClient()
    result = client.get_dashboard('1230')
    LOGGER.info(f'Client Says: Final response from server is: {result}')