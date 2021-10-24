/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./dashboard_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.DashboardClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.DashboardPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DashboardRequest,
 *   !proto.DashboardResponse>}
 */
const methodDescriptor_Dashboard_GetDashboard = new grpc.web.MethodDescriptor(
  '/Dashboard/GetDashboard',
  grpc.web.MethodType.UNARY,
  proto.DashboardRequest,
  proto.DashboardResponse,
  /**
   * @param {!proto.DashboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.DashboardResponse.deserializeBinary
);


/**
 * @param {!proto.DashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.DashboardResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DashboardResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DashboardClient.prototype.getDashboard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Dashboard/GetDashboard',
      request,
      metadata || {},
      methodDescriptor_Dashboard_GetDashboard,
      callback);
};


/**
 * @param {!proto.DashboardRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DashboardResponse>}
 *     Promise that resolves to the response
 */
proto.DashboardPromiseClient.prototype.getDashboard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Dashboard/GetDashboard',
      request,
      metadata || {},
      methodDescriptor_Dashboard_GetDashboard);
};


module.exports = proto;

