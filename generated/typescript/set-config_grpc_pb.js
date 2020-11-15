// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var set$config_pb = require('./set-config_pb.js');
var config_pb = require('./config_pb.js');

function serialize_AddSimpleDictionary(arg) {
  if (!(arg instanceof set$config_pb.AddSimpleDictionary)) {
    throw new Error('Expected argument of type AddSimpleDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddSimpleDictionary(buffer_arg) {
  return set$config_pb.AddSimpleDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_InsertSimpleDictionary(arg) {
  if (!(arg instanceof set$config_pb.InsertSimpleDictionary)) {
    throw new Error('Expected argument of type InsertSimpleDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_InsertSimpleDictionary(buffer_arg) {
  return set$config_pb.InsertSimpleDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MoveSimpleDictionary(arg) {
  if (!(arg instanceof set$config_pb.MoveSimpleDictionary)) {
    throw new Error('Expected argument of type MoveSimpleDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MoveSimpleDictionary(buffer_arg) {
  return set$config_pb.MoveSimpleDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MoveSimpleDictionaryResult(arg) {
  if (!(arg instanceof set$config_pb.MoveSimpleDictionaryResult)) {
    throw new Error('Expected argument of type MoveSimpleDictionaryResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MoveSimpleDictionaryResult(buffer_arg) {
  return set$config_pb.MoveSimpleDictionaryResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveFromMainDictionary(arg) {
  if (!(arg instanceof set$config_pb.RemoveFromMainDictionary)) {
    throw new Error('Expected argument of type RemoveFromMainDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RemoveFromMainDictionary(buffer_arg) {
  return set$config_pb.RemoveFromMainDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RemoveSimpleDictionary(arg) {
  if (!(arg instanceof set$config_pb.RemoveSimpleDictionary)) {
    throw new Error('Expected argument of type RemoveSimpleDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RemoveSimpleDictionary(buffer_arg) {
  return set$config_pb.RemoveSimpleDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateFloat(arg) {
  if (!(arg instanceof set$config_pb.UpdateFloat)) {
    throw new Error('Expected argument of type UpdateFloat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateFloat(buffer_arg) {
  return set$config_pb.UpdateFloat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateOrInsertMainDictionary(arg) {
  if (!(arg instanceof set$config_pb.UpdateOrInsertMainDictionary)) {
    throw new Error('Expected argument of type UpdateOrInsertMainDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateOrInsertMainDictionary(buffer_arg) {
  return set$config_pb.UpdateOrInsertMainDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateReadName(arg) {
  if (!(arg instanceof set$config_pb.UpdateReadName)) {
    throw new Error('Expected argument of type UpdateReadName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateReadName(buffer_arg) {
  return set$config_pb.UpdateReadName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateResultDictionaryEntryA(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultDictionaryEntryA)) {
    throw new Error('Expected argument of type UpdateResultDictionaryEntryA');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateResultDictionaryEntryA(buffer_arg) {
  return set$config_pb.UpdateResultDictionaryEntryA.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateResultDictionaryEntryB(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultDictionaryEntryB)) {
    throw new Error('Expected argument of type UpdateResultDictionaryEntryB');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateResultDictionaryEntryB(buffer_arg) {
  return set$config_pb.UpdateResultDictionaryEntryB.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateResultFloat(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultFloat)) {
    throw new Error('Expected argument of type UpdateResultFloat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateResultFloat(buffer_arg) {
  return set$config_pb.UpdateResultFloat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateResultReadName(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultReadName)) {
    throw new Error('Expected argument of type UpdateResultReadName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateResultReadName(buffer_arg) {
  return set$config_pb.UpdateResultReadName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateResultString(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultString)) {
    throw new Error('Expected argument of type UpdateResultString');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateResultString(buffer_arg) {
  return set$config_pb.UpdateResultString.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateResultUint32(arg) {
  if (!(arg instanceof set$config_pb.UpdateResultUint32)) {
    throw new Error('Expected argument of type UpdateResultUint32');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateResultUint32(buffer_arg) {
  return set$config_pb.UpdateResultUint32.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateSimpleDictionary(arg) {
  if (!(arg instanceof set$config_pb.UpdateSimpleDictionary)) {
    throw new Error('Expected argument of type UpdateSimpleDictionary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateSimpleDictionary(buffer_arg) {
  return set$config_pb.UpdateSimpleDictionary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateString(arg) {
  if (!(arg instanceof set$config_pb.UpdateString)) {
    throw new Error('Expected argument of type UpdateString');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateString(buffer_arg) {
  return set$config_pb.UpdateString.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateUint32(arg) {
  if (!(arg instanceof set$config_pb.UpdateUint32)) {
    throw new Error('Expected argument of type UpdateUint32');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateUint32(buffer_arg) {
  return set$config_pb.UpdateUint32.deserializeBinary(new Uint8Array(buffer_arg));
}


var ConfigSetterService = exports.ConfigSetterService = {
  updateKind: {
    path: '/ConfigSetter/updateKind',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateString,
    responseType: set$config_pb.UpdateResultString,
    requestSerialize: serialize_UpdateString,
    requestDeserialize: deserialize_UpdateString,
    responseSerialize: serialize_UpdateResultString,
    responseDeserialize: deserialize_UpdateResultString,
  },
  updateReadName: {
    path: '/ConfigSetter/updateReadName',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateReadName,
    responseType: set$config_pb.UpdateResultReadName,
    requestSerialize: serialize_UpdateReadName,
    requestDeserialize: deserialize_UpdateReadName,
    responseSerialize: serialize_UpdateResultReadName,
    responseDeserialize: deserialize_UpdateResultReadName,
  },
  updateSpeed: {
    path: '/ConfigSetter/updateSpeed',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_UpdateFloat,
    requestDeserialize: deserialize_UpdateFloat,
    responseSerialize: serialize_UpdateResultFloat,
    responseDeserialize: deserialize_UpdateResultFloat,
  },
  updateTone: {
    path: '/ConfigSetter/updateTone',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_UpdateFloat,
    requestDeserialize: deserialize_UpdateFloat,
    responseSerialize: serialize_UpdateResultFloat,
    responseDeserialize: deserialize_UpdateResultFloat,
  },
  updateVolume: {
    path: '/ConfigSetter/updateVolume',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_UpdateFloat,
    requestDeserialize: deserialize_UpdateFloat,
    responseSerialize: serialize_UpdateResultFloat,
    responseDeserialize: deserialize_UpdateResultFloat,
  },
  updateAllpass: {
    path: '/ConfigSetter/updateAllpass',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_UpdateFloat,
    requestDeserialize: deserialize_UpdateFloat,
    responseSerialize: serialize_UpdateResultFloat,
    responseDeserialize: deserialize_UpdateResultFloat,
  },
  updateIntone: {
    path: '/ConfigSetter/updateIntone',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_UpdateFloat,
    requestDeserialize: deserialize_UpdateFloat,
    responseSerialize: serialize_UpdateResultFloat,
    responseDeserialize: deserialize_UpdateResultFloat,
  },
  updateThreshold: {
    path: '/ConfigSetter/updateThreshold',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateFloat,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_UpdateFloat,
    requestDeserialize: deserialize_UpdateFloat,
    responseSerialize: serialize_UpdateResultFloat,
    responseDeserialize: deserialize_UpdateResultFloat,
  },
  updateRandomizer: {
    path: '/ConfigSetter/updateRandomizer',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateString,
    responseType: set$config_pb.UpdateResultFloat,
    requestSerialize: serialize_UpdateString,
    requestDeserialize: deserialize_UpdateString,
    responseSerialize: serialize_UpdateResultFloat,
    responseDeserialize: deserialize_UpdateResultFloat,
  },
  updateMaxReadLimit: {
    path: '/ConfigSetter/updateMaxReadLimit',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateUint32,
    responseType: set$config_pb.UpdateResultUint32,
    requestSerialize: serialize_UpdateUint32,
    requestDeserialize: deserialize_UpdateUint32,
    responseSerialize: serialize_UpdateResultUint32,
    responseDeserialize: deserialize_UpdateResultUint32,
  },
  updateMaxVolume: {
    path: '/ConfigSetter/updateMaxVolume',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateUint32,
    responseType: set$config_pb.UpdateResultUint32,
    requestSerialize: serialize_UpdateUint32,
    requestDeserialize: deserialize_UpdateUint32,
    responseSerialize: serialize_UpdateResultUint32,
    responseDeserialize: deserialize_UpdateResultUint32,
  },
  updateOrInsertMainDictionary: {
    path: '/ConfigSetter/updateOrInsertMainDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateOrInsertMainDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryA,
    requestSerialize: serialize_UpdateOrInsertMainDictionary,
    requestDeserialize: deserialize_UpdateOrInsertMainDictionary,
    responseSerialize: serialize_UpdateResultDictionaryEntryA,
    responseDeserialize: deserialize_UpdateResultDictionaryEntryA,
  },
  removeMainDictionary: {
    path: '/ConfigSetter/removeMainDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.RemoveFromMainDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryA,
    requestSerialize: serialize_RemoveFromMainDictionary,
    requestDeserialize: deserialize_RemoveFromMainDictionary,
    responseSerialize: serialize_UpdateResultDictionaryEntryA,
    responseDeserialize: deserialize_UpdateResultDictionaryEntryA,
  },
  updateSimpleDictionary: {
    path: '/ConfigSetter/updateSimpleDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.UpdateSimpleDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryB,
    requestSerialize: serialize_UpdateSimpleDictionary,
    requestDeserialize: deserialize_UpdateSimpleDictionary,
    responseSerialize: serialize_UpdateResultDictionaryEntryB,
    responseDeserialize: deserialize_UpdateResultDictionaryEntryB,
  },
  insertSimpleDictionary: {
    path: '/ConfigSetter/insertSimpleDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.InsertSimpleDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryB,
    requestSerialize: serialize_InsertSimpleDictionary,
    requestDeserialize: deserialize_InsertSimpleDictionary,
    responseSerialize: serialize_UpdateResultDictionaryEntryB,
    responseDeserialize: deserialize_UpdateResultDictionaryEntryB,
  },
  addSimpleDictionary: {
    path: '/ConfigSetter/addSimpleDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.AddSimpleDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryB,
    requestSerialize: serialize_AddSimpleDictionary,
    requestDeserialize: deserialize_AddSimpleDictionary,
    responseSerialize: serialize_UpdateResultDictionaryEntryB,
    responseDeserialize: deserialize_UpdateResultDictionaryEntryB,
  },
  removeSimpleDictionary: {
    path: '/ConfigSetter/removeSimpleDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.RemoveSimpleDictionary,
    responseType: set$config_pb.UpdateResultDictionaryEntryB,
    requestSerialize: serialize_RemoveSimpleDictionary,
    requestDeserialize: deserialize_RemoveSimpleDictionary,
    responseSerialize: serialize_UpdateResultDictionaryEntryB,
    responseDeserialize: deserialize_UpdateResultDictionaryEntryB,
  },
  moveSimpleDictionary: {
    path: '/ConfigSetter/moveSimpleDictionary',
    requestStream: false,
    responseStream: false,
    requestType: set$config_pb.MoveSimpleDictionary,
    responseType: set$config_pb.MoveSimpleDictionaryResult,
    requestSerialize: serialize_MoveSimpleDictionary,
    requestDeserialize: deserialize_MoveSimpleDictionary,
    responseSerialize: serialize_MoveSimpleDictionaryResult,
    responseDeserialize: deserialize_MoveSimpleDictionaryResult,
  },
};

exports.ConfigSetterClient = grpc.makeGenericClientConstructor(ConfigSetterService);
