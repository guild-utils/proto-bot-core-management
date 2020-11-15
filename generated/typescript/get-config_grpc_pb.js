// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var get$config_pb = require('./get-config_pb.js');
var config_pb = require('./config_pb.js');

function serialize_GuildVoiceConfig(arg) {
  if (!(arg instanceof get$config_pb.GuildVoiceConfig)) {
    throw new Error('Expected argument of type GuildVoiceConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GuildVoiceConfig(buffer_arg) {
  return get$config_pb.GuildVoiceConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GuildVoiceConfigRequest(arg) {
  if (!(arg instanceof get$config_pb.GuildVoiceConfigRequest)) {
    throw new Error('Expected argument of type GuildVoiceConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GuildVoiceConfigRequest(buffer_arg) {
  return get$config_pb.GuildVoiceConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LayeredVoiceConfig(arg) {
  if (!(arg instanceof get$config_pb.LayeredVoiceConfig)) {
    throw new Error('Expected argument of type LayeredVoiceConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LayeredVoiceConfig(buffer_arg) {
  return get$config_pb.LayeredVoiceConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LayeredVoiceConfigRequest(arg) {
  if (!(arg instanceof get$config_pb.LayeredVoiceConfigRequest)) {
    throw new Error('Expected argument of type LayeredVoiceConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LayeredVoiceConfigRequest(buffer_arg) {
  return get$config_pb.LayeredVoiceConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ReadName(arg) {
  if (!(arg instanceof get$config_pb.ReadName)) {
    throw new Error('Expected argument of type ReadName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ReadName(buffer_arg) {
  return get$config_pb.ReadName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ReadNameRequest(arg) {
  if (!(arg instanceof get$config_pb.ReadNameRequest)) {
    throw new Error('Expected argument of type ReadNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ReadNameRequest(buffer_arg) {
  return get$config_pb.ReadNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_VoiceConfigUpdateInfo(arg) {
  if (!(arg instanceof get$config_pb.VoiceConfigUpdateInfo)) {
    throw new Error('Expected argument of type VoiceConfigUpdateInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_VoiceConfigUpdateInfo(buffer_arg) {
  return get$config_pb.VoiceConfigUpdateInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_VoiceConfigUpdateStreamRequest(arg) {
  if (!(arg instanceof get$config_pb.VoiceConfigUpdateStreamRequest)) {
    throw new Error('Expected argument of type VoiceConfigUpdateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_VoiceConfigUpdateStreamRequest(buffer_arg) {
  return get$config_pb.VoiceConfigUpdateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConfigGetterService = exports.ConfigGetterService = {
  guildVoiceConfig: {
    path: '/ConfigGetter/guildVoiceConfig',
    requestStream: false,
    responseStream: false,
    requestType: get$config_pb.GuildVoiceConfigRequest,
    responseType: get$config_pb.GuildVoiceConfig,
    requestSerialize: serialize_GuildVoiceConfigRequest,
    requestDeserialize: deserialize_GuildVoiceConfigRequest,
    responseSerialize: serialize_GuildVoiceConfig,
    responseDeserialize: deserialize_GuildVoiceConfig,
  },
  layeredVoiceConfig: {
    path: '/ConfigGetter/layeredVoiceConfig',
    requestStream: false,
    responseStream: false,
    requestType: get$config_pb.LayeredVoiceConfigRequest,
    responseType: get$config_pb.LayeredVoiceConfig,
    requestSerialize: serialize_LayeredVoiceConfigRequest,
    requestDeserialize: deserialize_LayeredVoiceConfigRequest,
    responseSerialize: serialize_LayeredVoiceConfig,
    responseDeserialize: deserialize_LayeredVoiceConfig,
  },
  readName: {
    path: '/ConfigGetter/readName',
    requestStream: false,
    responseStream: false,
    requestType: get$config_pb.ReadNameRequest,
    responseType: get$config_pb.ReadName,
    requestSerialize: serialize_ReadNameRequest,
    requestDeserialize: deserialize_ReadNameRequest,
    responseSerialize: serialize_ReadName,
    responseDeserialize: deserialize_ReadName,
  },
  updateStream: {
    path: '/ConfigGetter/updateStream',
    requestStream: false,
    responseStream: true,
    requestType: get$config_pb.VoiceConfigUpdateStreamRequest,
    responseType: get$config_pb.VoiceConfigUpdateInfo,
    requestSerialize: serialize_VoiceConfigUpdateStreamRequest,
    requestDeserialize: deserialize_VoiceConfigUpdateStreamRequest,
    responseSerialize: serialize_VoiceConfigUpdateInfo,
    responseDeserialize: deserialize_VoiceConfigUpdateInfo,
  },
};

exports.ConfigGetterClient = grpc.makeGenericClientConstructor(ConfigGetterService);
