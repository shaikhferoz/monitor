from concurrent import futures
import logging
import grpc
from protoc_generated import dashboard_pb2
from protoc_generated import dashboard_pb2_grpc

# Global vars:
logging.basicConfig(level=logging.DEBUG)
LOGGER = logging.getLogger(__name__)

class DashboardServicer(dashboard_pb2_grpc.DashboardServicer):

    def GetDashboard(self, request, context):
        """ Eventually will make a DB call to fetch dashboard details.
        TBD: Currently simulating DB response.
        """
        LOGGER.info(f"SERVER speaking: Received dashboard ID: {request}")
        result = {
            'id': request.id,
            'name': 'dashboard1',
            'panels' : [
                {
                    'id': '1',
                    'type': 'bar-chart',
                    'data_source': 'mysql'
                },
                {
                    'id': '2',
                    'type': 'line-chart',
                    'data_source': 'postgresql'
                },
            ]
        }
        return dashboard_pb2.DashboardResponse(**result)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    dashboard_pb2_grpc.add_DashboardServicer_to_server(DashboardServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    LOGGER.info("gRPC server ready!")
    server.wait_for_termination()


if __name__ == '__main__':
    LOGGER.info(f"Starting gRPC Server with gRPC version: {grpc.__version__}")
    serve()
    


# import grpc
# from concurrent import futures
# import time
# import unary.unary_pb2_grpc as pb2_grpc
# import unary.unary_pb2 as pb2


# class UnaryService(pb2_grpc.UnaryServicer):

#     def __init__(self, *args, **kwargs):
#         pass

#     def GetServerResponse(self, request, context):

#         # get the string from the incoming request
#         message = request.message
#         result = f'Hello I am up and running received "{message}" message from you'
#         result = {'message': result, 'received': True}

#         return pb2.MessageResponse(**result)


# def serve():
#     server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
#     pb2_grpc.add_UnaryServicer_to_server(UnaryService(), server)
#     server.add_insecure_port('[::]:50051')
#     server.start()
#     server.wait_for_termination()


# if __name__ == '__main__':
#     serve()