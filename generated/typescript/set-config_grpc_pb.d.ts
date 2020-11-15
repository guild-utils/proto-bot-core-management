// package: management_app.config.set
// file: set-config.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as set_config_pb from "./set-config_pb";
import * as config_pb from "./config_pb";

interface IConfigSetterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    updateKind: IConfigSetterService_IupdateKind;
    updateReadName: IConfigSetterService_IupdateReadName;
    updateSpeed: IConfigSetterService_IupdateSpeed;
    updateTone: IConfigSetterService_IupdateTone;
    updateVolume: IConfigSetterService_IupdateVolume;
    updateAllpass: IConfigSetterService_IupdateAllpass;
    updateIntone: IConfigSetterService_IupdateIntone;
    updateThreshold: IConfigSetterService_IupdateThreshold;
    updateRandomizer: IConfigSetterService_IupdateRandomizer;
    updateMaxReadLimit: IConfigSetterService_IupdateMaxReadLimit;
    updateMaxVolume: IConfigSetterService_IupdateMaxVolume;
    updateOrInsertMainDictionary: IConfigSetterService_IupdateOrInsertMainDictionary;
    removeMainDictionary: IConfigSetterService_IremoveMainDictionary;
    updateSimpleDictionary: IConfigSetterService_IupdateSimpleDictionary;
    insertSimpleDictionary: IConfigSetterService_IinsertSimpleDictionary;
    addSimpleDictionary: IConfigSetterService_IaddSimpleDictionary;
    removeSimpleDictionary: IConfigSetterService_IremoveSimpleDictionary;
    moveSimpleDictionary: IConfigSetterService_ImoveSimpleDictionary;
}

interface IConfigSetterService_IupdateKind extends grpc.MethodDefinition<set_config_pb.UpdateString, set_config_pb.UpdateResultString> {
    path: "/management_app.config.set.ConfigSetter/updateKind";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateString>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateString>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultString>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultString>;
}
interface IConfigSetterService_IupdateReadName extends grpc.MethodDefinition<set_config_pb.UpdateReadName, set_config_pb.UpdateResultReadName> {
    path: "/management_app.config.set.ConfigSetter/updateReadName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateReadName>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateReadName>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultReadName>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultReadName>;
}
interface IConfigSetterService_IupdateSpeed extends grpc.MethodDefinition<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat> {
    path: "/management_app.config.set.ConfigSetter/updateSpeed";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateFloat>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateFloat>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultFloat>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultFloat>;
}
interface IConfigSetterService_IupdateTone extends grpc.MethodDefinition<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat> {
    path: "/management_app.config.set.ConfigSetter/updateTone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateFloat>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateFloat>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultFloat>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultFloat>;
}
interface IConfigSetterService_IupdateVolume extends grpc.MethodDefinition<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat> {
    path: "/management_app.config.set.ConfigSetter/updateVolume";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateFloat>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateFloat>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultFloat>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultFloat>;
}
interface IConfigSetterService_IupdateAllpass extends grpc.MethodDefinition<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat> {
    path: "/management_app.config.set.ConfigSetter/updateAllpass";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateFloat>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateFloat>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultFloat>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultFloat>;
}
interface IConfigSetterService_IupdateIntone extends grpc.MethodDefinition<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat> {
    path: "/management_app.config.set.ConfigSetter/updateIntone";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateFloat>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateFloat>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultFloat>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultFloat>;
}
interface IConfigSetterService_IupdateThreshold extends grpc.MethodDefinition<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat> {
    path: "/management_app.config.set.ConfigSetter/updateThreshold";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateFloat>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateFloat>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultFloat>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultFloat>;
}
interface IConfigSetterService_IupdateRandomizer extends grpc.MethodDefinition<set_config_pb.UpdateString, set_config_pb.UpdateResultFloat> {
    path: "/management_app.config.set.ConfigSetter/updateRandomizer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateString>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateString>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultFloat>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultFloat>;
}
interface IConfigSetterService_IupdateMaxReadLimit extends grpc.MethodDefinition<set_config_pb.UpdateUint32, set_config_pb.UpdateResultUint32> {
    path: "/management_app.config.set.ConfigSetter/updateMaxReadLimit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateUint32>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateUint32>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultUint32>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultUint32>;
}
interface IConfigSetterService_IupdateMaxVolume extends grpc.MethodDefinition<set_config_pb.UpdateUint32, set_config_pb.UpdateResultUint32> {
    path: "/management_app.config.set.ConfigSetter/updateMaxVolume";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateUint32>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateUint32>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultUint32>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultUint32>;
}
interface IConfigSetterService_IupdateOrInsertMainDictionary extends grpc.MethodDefinition<set_config_pb.UpdateOrInsertMainDictionary, set_config_pb.UpdateResultDictionaryEntryA> {
    path: "/management_app.config.set.ConfigSetter/updateOrInsertMainDictionary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateOrInsertMainDictionary>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateOrInsertMainDictionary>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultDictionaryEntryA>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultDictionaryEntryA>;
}
interface IConfigSetterService_IremoveMainDictionary extends grpc.MethodDefinition<set_config_pb.RemoveFromMainDictionary, set_config_pb.UpdateResultDictionaryEntryA> {
    path: "/management_app.config.set.ConfigSetter/removeMainDictionary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.RemoveFromMainDictionary>;
    requestDeserialize: grpc.deserialize<set_config_pb.RemoveFromMainDictionary>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultDictionaryEntryA>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultDictionaryEntryA>;
}
interface IConfigSetterService_IupdateSimpleDictionary extends grpc.MethodDefinition<set_config_pb.UpdateSimpleDictionary, set_config_pb.UpdateResultDictionaryEntryB> {
    path: "/management_app.config.set.ConfigSetter/updateSimpleDictionary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.UpdateSimpleDictionary>;
    requestDeserialize: grpc.deserialize<set_config_pb.UpdateSimpleDictionary>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultDictionaryEntryB>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultDictionaryEntryB>;
}
interface IConfigSetterService_IinsertSimpleDictionary extends grpc.MethodDefinition<set_config_pb.InsertSimpleDictionary, set_config_pb.UpdateResultDictionaryEntryB> {
    path: "/management_app.config.set.ConfigSetter/insertSimpleDictionary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.InsertSimpleDictionary>;
    requestDeserialize: grpc.deserialize<set_config_pb.InsertSimpleDictionary>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultDictionaryEntryB>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultDictionaryEntryB>;
}
interface IConfigSetterService_IaddSimpleDictionary extends grpc.MethodDefinition<set_config_pb.AddSimpleDictionary, set_config_pb.UpdateResultDictionaryEntryB> {
    path: "/management_app.config.set.ConfigSetter/addSimpleDictionary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.AddSimpleDictionary>;
    requestDeserialize: grpc.deserialize<set_config_pb.AddSimpleDictionary>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultDictionaryEntryB>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultDictionaryEntryB>;
}
interface IConfigSetterService_IremoveSimpleDictionary extends grpc.MethodDefinition<set_config_pb.RemoveSimpleDictionary, set_config_pb.UpdateResultDictionaryEntryB> {
    path: "/management_app.config.set.ConfigSetter/removeSimpleDictionary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.RemoveSimpleDictionary>;
    requestDeserialize: grpc.deserialize<set_config_pb.RemoveSimpleDictionary>;
    responseSerialize: grpc.serialize<set_config_pb.UpdateResultDictionaryEntryB>;
    responseDeserialize: grpc.deserialize<set_config_pb.UpdateResultDictionaryEntryB>;
}
interface IConfigSetterService_ImoveSimpleDictionary extends grpc.MethodDefinition<set_config_pb.MoveSimpleDictionary, set_config_pb.MoveSimpleDictionaryResult> {
    path: "/management_app.config.set.ConfigSetter/moveSimpleDictionary";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<set_config_pb.MoveSimpleDictionary>;
    requestDeserialize: grpc.deserialize<set_config_pb.MoveSimpleDictionary>;
    responseSerialize: grpc.serialize<set_config_pb.MoveSimpleDictionaryResult>;
    responseDeserialize: grpc.deserialize<set_config_pb.MoveSimpleDictionaryResult>;
}

export const ConfigSetterService: IConfigSetterService;

export interface IConfigSetterServer {
    updateKind: grpc.handleUnaryCall<set_config_pb.UpdateString, set_config_pb.UpdateResultString>;
    updateReadName: grpc.handleUnaryCall<set_config_pb.UpdateReadName, set_config_pb.UpdateResultReadName>;
    updateSpeed: grpc.handleUnaryCall<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat>;
    updateTone: grpc.handleUnaryCall<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat>;
    updateVolume: grpc.handleUnaryCall<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat>;
    updateAllpass: grpc.handleUnaryCall<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat>;
    updateIntone: grpc.handleUnaryCall<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat>;
    updateThreshold: grpc.handleUnaryCall<set_config_pb.UpdateFloat, set_config_pb.UpdateResultFloat>;
    updateRandomizer: grpc.handleUnaryCall<set_config_pb.UpdateString, set_config_pb.UpdateResultFloat>;
    updateMaxReadLimit: grpc.handleUnaryCall<set_config_pb.UpdateUint32, set_config_pb.UpdateResultUint32>;
    updateMaxVolume: grpc.handleUnaryCall<set_config_pb.UpdateUint32, set_config_pb.UpdateResultUint32>;
    updateOrInsertMainDictionary: grpc.handleUnaryCall<set_config_pb.UpdateOrInsertMainDictionary, set_config_pb.UpdateResultDictionaryEntryA>;
    removeMainDictionary: grpc.handleUnaryCall<set_config_pb.RemoveFromMainDictionary, set_config_pb.UpdateResultDictionaryEntryA>;
    updateSimpleDictionary: grpc.handleUnaryCall<set_config_pb.UpdateSimpleDictionary, set_config_pb.UpdateResultDictionaryEntryB>;
    insertSimpleDictionary: grpc.handleUnaryCall<set_config_pb.InsertSimpleDictionary, set_config_pb.UpdateResultDictionaryEntryB>;
    addSimpleDictionary: grpc.handleUnaryCall<set_config_pb.AddSimpleDictionary, set_config_pb.UpdateResultDictionaryEntryB>;
    removeSimpleDictionary: grpc.handleUnaryCall<set_config_pb.RemoveSimpleDictionary, set_config_pb.UpdateResultDictionaryEntryB>;
    moveSimpleDictionary: grpc.handleUnaryCall<set_config_pb.MoveSimpleDictionary, set_config_pb.MoveSimpleDictionaryResult>;
}

export interface IConfigSetterClient {
    updateKind(request: set_config_pb.UpdateString, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultString) => void): grpc.ClientUnaryCall;
    updateKind(request: set_config_pb.UpdateString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultString) => void): grpc.ClientUnaryCall;
    updateKind(request: set_config_pb.UpdateString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultString) => void): grpc.ClientUnaryCall;
    updateReadName(request: set_config_pb.UpdateReadName, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultReadName) => void): grpc.ClientUnaryCall;
    updateReadName(request: set_config_pb.UpdateReadName, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultReadName) => void): grpc.ClientUnaryCall;
    updateReadName(request: set_config_pb.UpdateReadName, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultReadName) => void): grpc.ClientUnaryCall;
    updateSpeed(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateSpeed(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateSpeed(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateTone(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateTone(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateTone(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateVolume(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateVolume(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateVolume(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateAllpass(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateAllpass(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateAllpass(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateIntone(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateIntone(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateIntone(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateThreshold(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateThreshold(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateThreshold(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateRandomizer(request: set_config_pb.UpdateString, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateRandomizer(request: set_config_pb.UpdateString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateRandomizer(request: set_config_pb.UpdateString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    updateMaxReadLimit(request: set_config_pb.UpdateUint32, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    updateMaxReadLimit(request: set_config_pb.UpdateUint32, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    updateMaxReadLimit(request: set_config_pb.UpdateUint32, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    updateMaxVolume(request: set_config_pb.UpdateUint32, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    updateMaxVolume(request: set_config_pb.UpdateUint32, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    updateMaxVolume(request: set_config_pb.UpdateUint32, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    updateOrInsertMainDictionary(request: set_config_pb.UpdateOrInsertMainDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    updateOrInsertMainDictionary(request: set_config_pb.UpdateOrInsertMainDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    updateOrInsertMainDictionary(request: set_config_pb.UpdateOrInsertMainDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    removeMainDictionary(request: set_config_pb.RemoveFromMainDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    removeMainDictionary(request: set_config_pb.RemoveFromMainDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    removeMainDictionary(request: set_config_pb.RemoveFromMainDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    updateSimpleDictionary(request: set_config_pb.UpdateSimpleDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    updateSimpleDictionary(request: set_config_pb.UpdateSimpleDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    updateSimpleDictionary(request: set_config_pb.UpdateSimpleDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    insertSimpleDictionary(request: set_config_pb.InsertSimpleDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    insertSimpleDictionary(request: set_config_pb.InsertSimpleDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    insertSimpleDictionary(request: set_config_pb.InsertSimpleDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    addSimpleDictionary(request: set_config_pb.AddSimpleDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    addSimpleDictionary(request: set_config_pb.AddSimpleDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    addSimpleDictionary(request: set_config_pb.AddSimpleDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    removeSimpleDictionary(request: set_config_pb.RemoveSimpleDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    removeSimpleDictionary(request: set_config_pb.RemoveSimpleDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    removeSimpleDictionary(request: set_config_pb.RemoveSimpleDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    moveSimpleDictionary(request: set_config_pb.MoveSimpleDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.MoveSimpleDictionaryResult) => void): grpc.ClientUnaryCall;
    moveSimpleDictionary(request: set_config_pb.MoveSimpleDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.MoveSimpleDictionaryResult) => void): grpc.ClientUnaryCall;
    moveSimpleDictionary(request: set_config_pb.MoveSimpleDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.MoveSimpleDictionaryResult) => void): grpc.ClientUnaryCall;
}

export class ConfigSetterClient extends grpc.Client implements IConfigSetterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public updateKind(request: set_config_pb.UpdateString, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultString) => void): grpc.ClientUnaryCall;
    public updateKind(request: set_config_pb.UpdateString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultString) => void): grpc.ClientUnaryCall;
    public updateKind(request: set_config_pb.UpdateString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultString) => void): grpc.ClientUnaryCall;
    public updateReadName(request: set_config_pb.UpdateReadName, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultReadName) => void): grpc.ClientUnaryCall;
    public updateReadName(request: set_config_pb.UpdateReadName, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultReadName) => void): grpc.ClientUnaryCall;
    public updateReadName(request: set_config_pb.UpdateReadName, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultReadName) => void): grpc.ClientUnaryCall;
    public updateSpeed(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateSpeed(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateSpeed(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateTone(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateTone(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateTone(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateVolume(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateVolume(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateVolume(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateAllpass(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateAllpass(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateAllpass(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateIntone(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateIntone(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateIntone(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateThreshold(request: set_config_pb.UpdateFloat, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateThreshold(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateThreshold(request: set_config_pb.UpdateFloat, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateRandomizer(request: set_config_pb.UpdateString, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateRandomizer(request: set_config_pb.UpdateString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateRandomizer(request: set_config_pb.UpdateString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultFloat) => void): grpc.ClientUnaryCall;
    public updateMaxReadLimit(request: set_config_pb.UpdateUint32, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    public updateMaxReadLimit(request: set_config_pb.UpdateUint32, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    public updateMaxReadLimit(request: set_config_pb.UpdateUint32, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    public updateMaxVolume(request: set_config_pb.UpdateUint32, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    public updateMaxVolume(request: set_config_pb.UpdateUint32, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    public updateMaxVolume(request: set_config_pb.UpdateUint32, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultUint32) => void): grpc.ClientUnaryCall;
    public updateOrInsertMainDictionary(request: set_config_pb.UpdateOrInsertMainDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    public updateOrInsertMainDictionary(request: set_config_pb.UpdateOrInsertMainDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    public updateOrInsertMainDictionary(request: set_config_pb.UpdateOrInsertMainDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    public removeMainDictionary(request: set_config_pb.RemoveFromMainDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    public removeMainDictionary(request: set_config_pb.RemoveFromMainDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    public removeMainDictionary(request: set_config_pb.RemoveFromMainDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryA) => void): grpc.ClientUnaryCall;
    public updateSimpleDictionary(request: set_config_pb.UpdateSimpleDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public updateSimpleDictionary(request: set_config_pb.UpdateSimpleDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public updateSimpleDictionary(request: set_config_pb.UpdateSimpleDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public insertSimpleDictionary(request: set_config_pb.InsertSimpleDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public insertSimpleDictionary(request: set_config_pb.InsertSimpleDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public insertSimpleDictionary(request: set_config_pb.InsertSimpleDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public addSimpleDictionary(request: set_config_pb.AddSimpleDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public addSimpleDictionary(request: set_config_pb.AddSimpleDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public addSimpleDictionary(request: set_config_pb.AddSimpleDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public removeSimpleDictionary(request: set_config_pb.RemoveSimpleDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public removeSimpleDictionary(request: set_config_pb.RemoveSimpleDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public removeSimpleDictionary(request: set_config_pb.RemoveSimpleDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.UpdateResultDictionaryEntryB) => void): grpc.ClientUnaryCall;
    public moveSimpleDictionary(request: set_config_pb.MoveSimpleDictionary, callback: (error: grpc.ServiceError | null, response: set_config_pb.MoveSimpleDictionaryResult) => void): grpc.ClientUnaryCall;
    public moveSimpleDictionary(request: set_config_pb.MoveSimpleDictionary, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: set_config_pb.MoveSimpleDictionaryResult) => void): grpc.ClientUnaryCall;
    public moveSimpleDictionary(request: set_config_pb.MoveSimpleDictionary, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: set_config_pb.MoveSimpleDictionaryResult) => void): grpc.ClientUnaryCall;
}
