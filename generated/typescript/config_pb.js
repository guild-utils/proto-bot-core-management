/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.management_app.config.common.Dictionary', null, global);
goog.exportSymbol('proto.management_app.config.common.DictionaryEntryA', null, global);
goog.exportSymbol('proto.management_app.config.common.DictionaryEntryB', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.management_app.config.common.DictionaryEntryA = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.management_app.config.common.DictionaryEntryA, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.management_app.config.common.DictionaryEntryA.displayName = 'proto.management_app.config.common.DictionaryEntryA';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.management_app.config.common.DictionaryEntryA.prototype.toObject = function(opt_includeInstance) {
  return proto.management_app.config.common.DictionaryEntryA.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.management_app.config.common.DictionaryEntryA} msg The msg instance to transform.
 * @return {!Object}
 */
proto.management_app.config.common.DictionaryEntryA.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: msg.getFrom(),
    to: msg.getTo(),
    p: msg.getP(),
    p1: msg.getP1(),
    p2: msg.getP2(),
    p3: msg.getP3()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.management_app.config.common.DictionaryEntryA}
 */
proto.management_app.config.common.DictionaryEntryA.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.management_app.config.common.DictionaryEntryA;
  return proto.management_app.config.common.DictionaryEntryA.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.management_app.config.common.DictionaryEntryA} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.management_app.config.common.DictionaryEntryA}
 */
proto.management_app.config.common.DictionaryEntryA.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setP(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setP1(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setP2(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setP3(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.management_app.config.common.DictionaryEntryA} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.management_app.config.common.DictionaryEntryA.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.management_app.config.common.DictionaryEntryA.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.management_app.config.common.DictionaryEntryA.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getTo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getP();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getP1();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getP2();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getP3();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.management_app.config.common.DictionaryEntryA} The clone.
 */
proto.management_app.config.common.DictionaryEntryA.prototype.cloneMessage = function() {
  return /** @type {!proto.management_app.config.common.DictionaryEntryA} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string from = 1;
 * @return {string}
 */
proto.management_app.config.common.DictionaryEntryA.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.management_app.config.common.DictionaryEntryA.prototype.setFrom = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string to = 2;
 * @return {string}
 */
proto.management_app.config.common.DictionaryEntryA.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.management_app.config.common.DictionaryEntryA.prototype.setTo = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string p = 3;
 * @return {string}
 */
proto.management_app.config.common.DictionaryEntryA.prototype.getP = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.management_app.config.common.DictionaryEntryA.prototype.setP = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string p1 = 4;
 * @return {string}
 */
proto.management_app.config.common.DictionaryEntryA.prototype.getP1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.management_app.config.common.DictionaryEntryA.prototype.setP1 = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string p2 = 5;
 * @return {string}
 */
proto.management_app.config.common.DictionaryEntryA.prototype.getP2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.management_app.config.common.DictionaryEntryA.prototype.setP2 = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string p3 = 6;
 * @return {string}
 */
proto.management_app.config.common.DictionaryEntryA.prototype.getP3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.management_app.config.common.DictionaryEntryA.prototype.setP3 = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.management_app.config.common.DictionaryEntryB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.management_app.config.common.DictionaryEntryB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.management_app.config.common.DictionaryEntryB.displayName = 'proto.management_app.config.common.DictionaryEntryB';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.management_app.config.common.DictionaryEntryB.prototype.toObject = function(opt_includeInstance) {
  return proto.management_app.config.common.DictionaryEntryB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.management_app.config.common.DictionaryEntryB} msg The msg instance to transform.
 * @return {!Object}
 */
proto.management_app.config.common.DictionaryEntryB.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: msg.getFrom(),
    to: msg.getTo(),
    index: msg.getIndex()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.management_app.config.common.DictionaryEntryB}
 */
proto.management_app.config.common.DictionaryEntryB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.management_app.config.common.DictionaryEntryB;
  return proto.management_app.config.common.DictionaryEntryB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.management_app.config.common.DictionaryEntryB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.management_app.config.common.DictionaryEntryB}
 */
proto.management_app.config.common.DictionaryEntryB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.management_app.config.common.DictionaryEntryB} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.management_app.config.common.DictionaryEntryB.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.management_app.config.common.DictionaryEntryB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.management_app.config.common.DictionaryEntryB.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getTo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.management_app.config.common.DictionaryEntryB} The clone.
 */
proto.management_app.config.common.DictionaryEntryB.prototype.cloneMessage = function() {
  return /** @type {!proto.management_app.config.common.DictionaryEntryB} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string from = 1;
 * @return {string}
 */
proto.management_app.config.common.DictionaryEntryB.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.management_app.config.common.DictionaryEntryB.prototype.setFrom = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string to = 2;
 * @return {string}
 */
proto.management_app.config.common.DictionaryEntryB.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.management_app.config.common.DictionaryEntryB.prototype.setTo = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 index = 3;
 * @return {number}
 */
proto.management_app.config.common.DictionaryEntryB.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.management_app.config.common.DictionaryEntryB.prototype.setIndex = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.management_app.config.common.Dictionary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.management_app.config.common.Dictionary.repeatedFields_, null);
};
goog.inherits(proto.management_app.config.common.Dictionary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.management_app.config.common.Dictionary.displayName = 'proto.management_app.config.common.Dictionary';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.management_app.config.common.Dictionary.repeatedFields_ = [2,1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.management_app.config.common.Dictionary.prototype.toObject = function(opt_includeInstance) {
  return proto.management_app.config.common.Dictionary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.management_app.config.common.Dictionary} msg The msg instance to transform.
 * @return {!Object}
 */
proto.management_app.config.common.Dictionary.toObject = function(includeInstance, msg) {
  var f, obj = {
    beforeList: jspb.Message.toObjectList(msg.getBeforeList(),
    proto.management_app.config.common.DictionaryEntryB.toObject, includeInstance),
    entrysList: jspb.Message.toObjectList(msg.getEntrysList(),
    proto.management_app.config.common.DictionaryEntryA.toObject, includeInstance),
    afterList: jspb.Message.toObjectList(msg.getAfterList(),
    proto.management_app.config.common.DictionaryEntryB.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.management_app.config.common.Dictionary}
 */
proto.management_app.config.common.Dictionary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.management_app.config.common.Dictionary;
  return proto.management_app.config.common.Dictionary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.management_app.config.common.Dictionary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.management_app.config.common.Dictionary}
 */
proto.management_app.config.common.Dictionary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.management_app.config.common.DictionaryEntryB;
      reader.readMessage(value,proto.management_app.config.common.DictionaryEntryB.deserializeBinaryFromReader);
      msg.getBeforeList().push(value);
      msg.setBeforeList(msg.getBeforeList());
      break;
    case 1:
      var value = new proto.management_app.config.common.DictionaryEntryA;
      reader.readMessage(value,proto.management_app.config.common.DictionaryEntryA.deserializeBinaryFromReader);
      msg.getEntrysList().push(value);
      msg.setEntrysList(msg.getEntrysList());
      break;
    case 3:
      var value = new proto.management_app.config.common.DictionaryEntryB;
      reader.readMessage(value,proto.management_app.config.common.DictionaryEntryB.deserializeBinaryFromReader);
      msg.getAfterList().push(value);
      msg.setAfterList(msg.getAfterList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.management_app.config.common.Dictionary} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.management_app.config.common.Dictionary.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.management_app.config.common.Dictionary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.management_app.config.common.Dictionary.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBeforeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.management_app.config.common.DictionaryEntryB.serializeBinaryToWriter
    );
  }
  f = this.getEntrysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.management_app.config.common.DictionaryEntryA.serializeBinaryToWriter
    );
  }
  f = this.getAfterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.management_app.config.common.DictionaryEntryB.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.management_app.config.common.Dictionary} The clone.
 */
proto.management_app.config.common.Dictionary.prototype.cloneMessage = function() {
  return /** @type {!proto.management_app.config.common.Dictionary} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated DictionaryEntryB before = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.management_app.config.common.DictionaryEntryB>}
 */
proto.management_app.config.common.Dictionary.prototype.getBeforeList = function() {
  return /** @type{!Array.<!proto.management_app.config.common.DictionaryEntryB>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.management_app.config.common.DictionaryEntryB, 2));
};


/** @param {Array.<!proto.management_app.config.common.DictionaryEntryB>} value  */
proto.management_app.config.common.Dictionary.prototype.setBeforeList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.management_app.config.common.Dictionary.prototype.clearBeforeList = function() {
  this.setBeforeList([]);
};


/**
 * repeated DictionaryEntryA entrys = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.management_app.config.common.DictionaryEntryA>}
 */
proto.management_app.config.common.Dictionary.prototype.getEntrysList = function() {
  return /** @type{!Array.<!proto.management_app.config.common.DictionaryEntryA>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.management_app.config.common.DictionaryEntryA, 1));
};


/** @param {Array.<!proto.management_app.config.common.DictionaryEntryA>} value  */
proto.management_app.config.common.Dictionary.prototype.setEntrysList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.management_app.config.common.Dictionary.prototype.clearEntrysList = function() {
  this.setEntrysList([]);
};


/**
 * repeated DictionaryEntryB after = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.management_app.config.common.DictionaryEntryB>}
 */
proto.management_app.config.common.Dictionary.prototype.getAfterList = function() {
  return /** @type{!Array.<!proto.management_app.config.common.DictionaryEntryB>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.management_app.config.common.DictionaryEntryB, 3));
};


/** @param {Array.<!proto.management_app.config.common.DictionaryEntryB>} value  */
proto.management_app.config.common.Dictionary.prototype.setAfterList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.management_app.config.common.Dictionary.prototype.clearAfterList = function() {
  this.setAfterList([]);
};


goog.object.extend(exports, proto.management_app.config.common);
