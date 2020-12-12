// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var set$config_pb = require('./set-config_pb.js');
var config_pb = require('./config_pb.js');

function serialize_management_app_config_set_AddSimpleDictionary(arg) {
  if (!(arg instanceof set$config_pb.AddSimpleDictionary)) {
    throw new Error('Expected argument of type management_app.config.set.AddSimpleDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_AddSimpleDictionary(buffer_arg) {
  return set$config_pb.AddSimpleDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_InsertSimpleDictionary(arg) {
  if (!(arg instanceof set$config_pb.InsertSimpleDictionary)) {
    throw new Error('Expected argument of type management_app.config.set.InsertSimpleDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_InsertSimpleDictionary(buffer_arg) {
  return set$config_pb.InsertSimpleDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_MoveSimpleDictionary(arg) {
  if (!(arg instanceof set$config_pb.MoveSimpleDictionary)) {
    throw new Error('Expected argument of type management_app.config.set.MoveSimpleDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_MoveSimpleDictionary(buffer_arg) {
  return set$config_pb.MoveSimpleDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_MoveSimpleDictionaryResult(arg) {
  if (!(arg instanceof set$config_pb.MoveSimpleDictionaryResult)) {
    throw new Error('Expected argument of type management_app.config.set.MoveSimpleDictionaryResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_MoveSimpleDictionaryResult(buffer_arg) {
  return set$config_pb.MoveSimpleDictionaryResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_RemoveFromAnalysisDictionary(arg) {
  if (!(arg instanceof set$config_pb.RemoveFromAnalysisDictionary)) {
    throw new Error('Expected argument of type management_app.config.set.RemoveFromAnalysisDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_RemoveFromAnalysisDictionary(buffer_arg) {
  return set$config_pb.RemoveFromAnalysisDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_RemoveSimpleDictionary(arg) {
  if (!(arg instanceof set$config_pb.RemoveSimpleDictionary)) {
    throw new Error('Expected argument of type management_app.config.set.RemoveSimpleDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_RemoveSimpleDictionary(buffer_arg) {
  return set$config_pb.RemoveSimpleDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateFloat(arg) {
  if (!(arg instanceof set$config_pb.UpdateFloat)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateFloat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateFloat(buffer_arg) {
  return set$config_pb.UpdateFloat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateOrInsertAnalysisDictionary(arg) {
  if (!(arg instanceof set$config_pb.UpdateOrInsertAnalysisDictionary)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateOrInsertAnalysisDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateOrInsertAnalysisDictionary(buffer_arg) {
  return set$config_pb.UpdateOrInsertAnalysisDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateReadName(arg) {
  if (!(arg instanceof set$config_pb.UpdateReadName)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateReadName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateReadName(buffer_arg) {
  return set$config_pb.UpdateReadName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateResultDictionaryEntryA(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultDictionaryEntryA)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateResultDictionaryEntryA');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateResultDictionaryEntryA(buffer_arg) {
  return set$config_pb.UpdateResultDictionaryEntryA.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateResultDictionaryEntryB(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultDictionaryEntryB)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateResultDictionaryEntryB');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateResultDictionaryEntryB(buffer_arg) {
  return set$config_pb.UpdateResultDictionaryEntryB.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateResultFloat(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultFloat)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateResultFloat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateResultFloat(buffer_arg) {
  return set$config_pb.UpdateResultFloat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateResultReadName(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultReadName)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateResultReadName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateResultReadName(buffer_arg) {
  return set$config_pb.UpdateResultReadName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateResultString(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultString)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateResultString');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateResultString(buffer_arg) {
  return set$config_pb.UpdateResultString.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateResultUint32(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultUint32)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateResultUint32');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateResultUint32(buffer_arg) {
  return set$config_pb.UpdateResultUint32.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateSimpleDictionary(arg) {
  if (!(arg instanceof set$config_pb.UpdateSimpleDictionary)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateSimpleDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateSimpleDictionary(buffer_arg) {
  return set$config_pb.UpdateSimpleDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateString(arg) {
  if (!(arg instanceof set$config_pb.UpdateString)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateString');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateString(buffer_arg) {
  return set$config_pb.UpdateString.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_management_app_config_set_UpdateUint32(arg) {
  if (!(arg instanceof set$config_pb.UpdateUint32)) {
    throw new Error('Expected argument of type management_app.config.set.UpdateUint32');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_management_app_config_set_UpdateUint32(buffer_arg) {
  return set$config_pb.UpdateUint32.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConfigSetterService = exports.ConfigSetterService = {
  updateKind: {
    path: '/management_app.config.set.ConfigSetter/updateKind',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateString,
    responseType: set$config_pb.UpdateResultString,
    requestSerialize: serialize_management_app_config_set_UpdateString,
    requestDeserialize: deserialize_management_app_config_set_UpdateString,
    responseSerialize: serialize_management_app_config_set_UpdateResultString,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultString,
  },
  updateReadName: {
    path: '/management_app.config.set.ConfigSetter/updateReadName',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateReadName,
    responseType: set$config_pb.UpdateResultReadName,
    requestSerialize: serialize_management_app_config_set_UpdateReadName,
    requestDeserialize: deserialize_management_app_config_set_UpdateReadName,
    responseSerialize: serialize_management_app_config_set_UpdateResultReadName,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultReadName,
  },
  updateSpeed: {
    path: '/management_app.config.set.ConfigSetter/updateSpeed',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_management_app_config_set_UpdateFloat,
    requestDeserialize: deserialize_management_app_config_set_UpdateFloat,
    responseSerialize: serialize_management_app_config_set_UpdateResultFloat,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultFloat,
  },
  updateTone: {
    path: '/management_app.config.set.ConfigSetter/updateTone',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_management_app_config_set_UpdateFloat,
    requestDeserialize: deserialize_management_app_config_set_UpdateFloat,
    responseSerialize: serialize_management_app_config_set_UpdateResultFloat,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultFloat,
  },
  updateVolume: {
    path: '/management_app.config.set.ConfigSetter/updateVolume',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_management_app_config_set_UpdateFloat,
    requestDeserialize: deserialize_management_app_config_set_UpdateFloat,
    responseSerialize: serialize_management_app_config_set_UpdateResultFloat,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultFloat,
  },
  updateAllpass: {
    path: '/management_app.config.set.ConfigSetter/updateAllpass',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_management_app_config_set_UpdateFloat,
    requestDeserialize: deserialize_management_app_config_set_UpdateFloat,
    responseSerialize: serialize_management_app_config_set_UpdateResultFloat,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultFloat,
  },
  updateIntone: {
    path: '/management_app.config.set.ConfigSetter/updateIntone',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_management_app_config_set_UpdateFloat,
    requestDeserialize: deserialize_management_app_config_set_UpdateFloat,
    responseSerialize: serialize_management_app_config_set_UpdateResultFloat,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultFloat,
  },
  updateThreshold: {
    path: '/management_app.config.set.ConfigSetter/updateThreshold',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_management_app_config_set_UpdateFloat,
    requestDeserialize: deserialize_management_app_config_set_UpdateFloat,
    responseSerialize: serialize_management_app_config_set_UpdateResultFloat,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultFloat,
  },
  updateRandomizer: {
    path: '/management_app.config.set.ConfigSetter/updateRandomizer',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateString,
    responseType: set$config_pb.UpdateResultString,
    requestSerialize: serialize_management_app_config_set_UpdateString,
    requestDeserialize: deserialize_management_app_config_set_UpdateString,
    responseSerialize: serialize_management_app_config_set_UpdateResultString,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultString,
  },
  updateMaxReadLimit: {
    path: '/management_app.config.set.ConfigSetter/updateMaxReadLimit',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateUint32,
    responseType: set$config_pb.UpdateResultUint32,
    requestSerialize: serialize_management_app_config_set_UpdateUint32,
    requestDeserialize: deserialize_management_app_config_set_UpdateUint32,
    responseSerialize: serialize_management_app_config_set_UpdateResultUint32,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultUint32,
  },
  updateMaxVolume: {
    path: '/management_app.config.set.ConfigSetter/updateMaxVolume',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateUint32,
    responseType: set$config_pb.UpdateResultUint32,
    requestSerialize: serialize_management_app_config_set_UpdateUint32,
    requestDeserialize: deserialize_management_app_config_set_UpdateUint32,
    responseSerialize: serialize_management_app_config_set_UpdateResultUint32,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultUint32,
  },
  updateOrInsertAnalysisDictionary: {
    path: '/management_app.config.set.ConfigSetter/updateOrInsertAnalysisDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateOrInsertAnalysisDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryA,
    requestSerialize: serialize_management_app_config_set_UpdateOrInsertAnalysisDictionary,
    requestDeserialize: deserialize_management_app_config_set_UpdateOrInsertAnalysisDictionary,
    responseSerialize: serialize_management_app_config_set_UpdateResultDictionaryEntryA,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultDictionaryEntryA,
  },
  removeAnalysisDictionary: {
    path: '/management_app.config.set.ConfigSetter/removeAnalysisDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.RemoveFromAnalysisDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryA,
    requestSerialize: serialize_management_app_config_set_RemoveFromAnalysisDictionary,
    requestDeserialize: deserialize_management_app_config_set_RemoveFromAnalysisDictionary,
    responseSerialize: serialize_management_app_config_set_UpdateResultDictionaryEntryA,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultDictionaryEntryA,
  },
  updateSimpleDictionary: {
    path: '/management_app.config.set.ConfigSetter/updateSimpleDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateSimpleDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryB,
    requestSerialize: serialize_management_app_config_set_UpdateSimpleDictionary,
    requestDeserialize: deserialize_management_app_config_set_UpdateSimpleDictionary,
    responseSerialize: serialize_management_app_config_set_UpdateResultDictionaryEntryB,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultDictionaryEntryB,
  },
  insertSimpleDictionary: {
    path: '/management_app.config.set.ConfigSetter/insertSimpleDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.InsertSimpleDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryB,
    requestSerialize: serialize_management_app_config_set_InsertSimpleDictionary,
    requestDeserialize: deserialize_management_app_config_set_InsertSimpleDictionary,
    responseSerialize: serialize_management_app_config_set_UpdateResultDictionaryEntryB,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultDictionaryEntryB,
  },
  addSimpleDictionary: {
    path: '/management_app.config.set.ConfigSetter/addSimpleDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.AddSimpleDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryB,
    requestSerialize: serialize_management_app_config_set_AddSimpleDictionary,
    requestDeserialize: deserialize_management_app_config_set_AddSimpleDictionary,
    responseSerialize: serialize_management_app_config_set_UpdateResultDictionaryEntryB,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultDictionaryEntryB,
  },
  removeSimpleDictionary: {
    path: '/management_app.config.set.ConfigSetter/removeSimpleDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.RemoveSimpleDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryB,
    requestSerialize: serialize_management_app_config_set_RemoveSimpleDictionary,
    requestDeserialize: deserialize_management_app_config_set_RemoveSimpleDictionary,
    responseSerialize: serialize_management_app_config_set_UpdateResultDictionaryEntryB,
    responseDeserialize: deserialize_management_app_config_set_UpdateResultDictionaryEntryB,
  },
  moveSimpleDictionary: {
    path: '/management_app.config.set.ConfigSetter/moveSimpleDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.MoveSimpleDictionary,
    responseType: set$config_pb.MoveSimpleDictionaryResult,
    requestSerialize: serialize_management_app_config_set_MoveSimpleDictionary,
    requestDeserialize: deserialize_management_app_config_set_MoveSimpleDictionary,
    responseSerialize: serialize_management_app_config_set_MoveSimpleDictionaryResult,
    responseDeserialize: deserialize_management_app_config_set_MoveSimpleDictionaryResult,
  },
};

exports.ConfigSetterClient = grpc.makeGenericClientConstructor(ConfigSetterService);
