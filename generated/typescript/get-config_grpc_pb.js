// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var get$config_pb = require('./get-config_pb.js');
var config_pb = require('./config_pb.js');

function serialize_management_app_config_get_GuildVoiceConfig(arg) {
  if (!(arg instanceof get$config_pb.GuildVoiceConfig)) {
    throw new Error('Expected argument of type management_app.config.get.GuildVoiceConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_get_GuildVoiceConfig(buffer_arg) {
  return get$config_pb.GuildVoiceConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_get_GuildVoiceConfigRequest(arg) {
  if (!(arg instanceof get$config_pb.GuildVoiceConfigRequest)) {
    throw new Error('Expected argument of type management_app.config.get.GuildVoiceConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_get_GuildVoiceConfigRequest(buffer_arg) {
  return get$config_pb.GuildVoiceConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_get_LayeredVoiceConfig(arg) {
  if (!(arg instanceof get$config_pb.LayeredVoiceConfig)) {
    throw new Error('Expected argument of type management_app.config.get.LayeredVoiceConfig');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_get_LayeredVoiceConfig(buffer_arg) {
  return get$config_pb.LayeredVoiceConfig.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_get_LayeredVoiceConfigRequest(arg) {
  if (!(arg instanceof get$config_pb.LayeredVoiceConfigRequest)) {
    throw new Error('Expected argument of type management_app.config.get.LayeredVoiceConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_get_LayeredVoiceConfigRequest(buffer_arg) {
  return get$config_pb.LayeredVoiceConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_get_ReadName(arg) {
  if (!(arg instanceof get$config_pb.ReadName)) {
    throw new Error('Expected argument of type management_app.config.get.ReadName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_get_ReadName(buffer_arg) {
  return get$config_pb.ReadName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_get_ReadNameRequest(arg) {
  if (!(arg instanceof get$config_pb.ReadNameRequest)) {
    throw new Error('Expected argument of type management_app.config.get.ReadNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_get_ReadNameRequest(buffer_arg) {
  return get$config_pb.ReadNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_get_VoiceConfigUpdateInfo(arg) {
  if (!(arg instanceof get$config_pb.VoiceConfigUpdateInfo)) {
    throw new Error('Expected argument of type management_app.config.get.VoiceConfigUpdateInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_get_VoiceConfigUpdateInfo(buffer_arg) {
  return get$config_pb.VoiceConfigUpdateInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_get_VoiceConfigUpdateStreamRequest(arg) {
  if (!(arg instanceof get$config_pb.VoiceConfigUpdateStreamRequest)) {
    throw new Error('Expected argument of type management_app.config.get.VoiceConfigUpdateStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_get_VoiceConfigUpdateStreamRequest(buffer_arg) {
  return get$config_pb.VoiceConfigUpdateStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConfigGetterService = exports.ConfigGetterService = {
  guildVoiceConfig: {
    path: '/management_app.config.get.ConfigGetter/guildVoiceConfig',
    requestStream: false,
    responseStream: false,
    requestType: get$config_pb.GuildVoiceConfigRequest,
    responseType: get$config_pb.GuildVoiceConfig,
    requestSerialize: serialize_management_app_config_get_GuildVoiceConfigRequest,
    requestDeserialize: deserialize_management_app_config_get_GuildVoiceConfigRequest,
    responseSerialize: serialize_management_app_config_get_GuildVoiceConfig,
    responseDeserialize: deserialize_management_app_config_get_GuildVoiceConfig,
  },
  layeredVoiceConfig: {
    path: '/management_app.config.get.ConfigGetter/layeredVoiceConfig',
    requestStream: false,
    responseStream: false,
    requestType: get$config_pb.LayeredVoiceConfigRequest,
    responseType: get$config_pb.LayeredVoiceConfig,
    requestSerialize: serialize_management_app_config_get_LayeredVoiceConfigRequest,
    requestDeserialize: deserialize_management_app_config_get_LayeredVoiceConfigRequest,
    responseSerialize: serialize_management_app_config_get_LayeredVoiceConfig,
    responseDeserialize: deserialize_management_app_config_get_LayeredVoiceConfig,
  },
  readName: {
    path: '/management_app.config.get.ConfigGetter/readName',
    requestStream: false,
    responseStream: false,
    requestType: get$config_pb.ReadNameRequest,
    responseType: get$config_pb.ReadName,
    requestSerialize: serialize_management_app_config_get_ReadNameRequest,
    requestDeserialize: deserialize_management_app_config_get_ReadNameRequest,
    responseSerialize: serialize_management_app_config_get_ReadName,
    responseDeserialize: deserialize_management_app_config_get_ReadName,
  },
  updateStream: {
    path: '/management_app.config.get.ConfigGetter/updateStream',
    requestStream: false,
    responseStream: true,
    requestType: get$config_pb.VoiceConfigUpdateStreamRequest,
    responseType: get$config_pb.VoiceConfigUpdateInfo,
    requestSerialize: serialize_management_app_config_get_VoiceConfigUpdateStreamRequest,
    requestDeserialize: deserialize_management_app_config_get_VoiceConfigUpdateStreamRequest,
    responseSerialize: serialize_management_app_config_get_VoiceConfigUpdateInfo,
    responseDeserialize: deserialize_management_app_config_get_VoiceConfigUpdateInfo,
  },
};

exports.ConfigGetterClient = grpc.makeGenericClientConstructor(ConfigGetterService);
