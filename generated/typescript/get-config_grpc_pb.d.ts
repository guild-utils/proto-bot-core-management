// package: management_app.config.get
// file: get-config.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as get_config_pb from "./get-config_pb";
import * as config_pb from "./config_pb";

interface IConfigGetterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    guildVoiceConfig: IConfigGetterService_IguildVoiceConfig;
    layeredVoiceConfig: IConfigGetterService_IlayeredVoiceConfig;
    readName: IConfigGetterService_IreadName;
    updateStream: IConfigGetterService_IupdateStream;
}

interface IConfigGetterService_IguildVoiceConfig extends grpc.MethodDefinition<get_config_pb.GuildVoiceConfigRequest, get_config_pb.GuildVoiceConfig> {
    path: "/management_app.config.get.ConfigGetter/guildVoiceConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<get_config_pb.GuildVoiceConfigRequest>;
    requestDeserialize: grpc.deserialize<get_config_pb.GuildVoiceConfigRequest>;
    responseSerialize: grpc.serialize<get_config_pb.GuildVoiceConfig>;
    responseDeserialize: grpc.deserialize<get_config_pb.GuildVoiceConfig>;
}
interface IConfigGetterService_IlayeredVoiceConfig extends grpc.MethodDefinition<get_config_pb.LayeredVoiceConfigRequest, get_config_pb.LayeredVoiceConfig> {
    path: "/management_app.config.get.ConfigGetter/layeredVoiceConfig";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<get_config_pb.LayeredVoiceConfigRequest>;
    requestDeserialize: grpc.deserialize<get_config_pb.LayeredVoiceConfigRequest>;
    responseSerialize: grpc.serialize<get_config_pb.LayeredVoiceConfig>;
    responseDeserialize: grpc.deserialize<get_config_pb.LayeredVoiceConfig>;
}
interface IConfigGetterService_IreadName extends grpc.MethodDefinition<get_config_pb.ReadNameRequest, get_config_pb.ReadName> {
    path: "/management_app.config.get.ConfigGetter/readName";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<get_config_pb.ReadNameRequest>;
    requestDeserialize: grpc.deserialize<get_config_pb.ReadNameRequest>;
    responseSerialize: grpc.serialize<get_config_pb.ReadName>;
    responseDeserialize: grpc.deserialize<get_config_pb.ReadName>;
}
interface IConfigGetterService_IupdateStream extends grpc.MethodDefinition<get_config_pb.VoiceConfigUpdateStreamRequest, get_config_pb.VoiceConfigUpdateInfo> {
    path: "/management_app.config.get.ConfigGetter/updateStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<get_config_pb.VoiceConfigUpdateStreamRequest>;
    requestDeserialize: grpc.deserialize<get_config_pb.VoiceConfigUpdateStreamRequest>;
    responseSerialize: grpc.serialize<get_config_pb.VoiceConfigUpdateInfo>;
    responseDeserialize: grpc.deserialize<get_config_pb.VoiceConfigUpdateInfo>;
}

export const ConfigGetterService: IConfigGetterService;

export interface IConfigGetterServer {
    guildVoiceConfig: grpc.handleUnaryCall<get_config_pb.GuildVoiceConfigRequest, get_config_pb.GuildVoiceConfig>;
    layeredVoiceConfig: grpc.handleUnaryCall<get_config_pb.LayeredVoiceConfigRequest, get_config_pb.LayeredVoiceConfig>;
    readName: grpc.handleUnaryCall<get_config_pb.ReadNameRequest, get_config_pb.ReadName>;
    updateStream: grpc.handleServerStreamingCall<get_config_pb.VoiceConfigUpdateStreamRequest, get_config_pb.VoiceConfigUpdateInfo>;
}

export interface IConfigGetterClient {
    guildVoiceConfig(request: get_config_pb.GuildVoiceConfigRequest, callback: (error: grpc.ServiceError | null, response: get_config_pb.GuildVoiceConfig) => void): grpc.ClientUnaryCall;
    guildVoiceConfig(request: get_config_pb.GuildVoiceConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: get_config_pb.GuildVoiceConfig) => void): grpc.ClientUnaryCall;
    guildVoiceConfig(request: get_config_pb.GuildVoiceConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: get_config_pb.GuildVoiceConfig) => void): grpc.ClientUnaryCall;
    layeredVoiceConfig(request: get_config_pb.LayeredVoiceConfigRequest, callback: (error: grpc.ServiceError | null, response: get_config_pb.LayeredVoiceConfig) => void): grpc.ClientUnaryCall;
    layeredVoiceConfig(request: get_config_pb.LayeredVoiceConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: get_config_pb.LayeredVoiceConfig) => void): grpc.ClientUnaryCall;
    layeredVoiceConfig(request: get_config_pb.LayeredVoiceConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: get_config_pb.LayeredVoiceConfig) => void): grpc.ClientUnaryCall;
    readName(request: get_config_pb.ReadNameRequest, callback: (error: grpc.ServiceError | null, response: get_config_pb.ReadName) => void): grpc.ClientUnaryCall;
    readName(request: get_config_pb.ReadNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: get_config_pb.ReadName) => void): grpc.ClientUnaryCall;
    readName(request: get_config_pb.ReadNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: get_config_pb.ReadName) => void): grpc.ClientUnaryCall;
    updateStream(request: get_config_pb.VoiceConfigUpdateStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<get_config_pb.VoiceConfigUpdateInfo>;
    updateStream(request: get_config_pb.VoiceConfigUpdateStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<get_config_pb.VoiceConfigUpdateInfo>;
}

export class ConfigGetterClient extends grpc.Client implements IConfigGetterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public guildVoiceConfig(request: get_config_pb.GuildVoiceConfigRequest, callback: (error: grpc.ServiceError | null, response: get_config_pb.GuildVoiceConfig) => void): grpc.ClientUnaryCall;
    public guildVoiceConfig(request: get_config_pb.GuildVoiceConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: get_config_pb.GuildVoiceConfig) => void): grpc.ClientUnaryCall;
    public guildVoiceConfig(request: get_config_pb.GuildVoiceConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: get_config_pb.GuildVoiceConfig) => void): grpc.ClientUnaryCall;
    public layeredVoiceConfig(request: get_config_pb.LayeredVoiceConfigRequest, callback: (error: grpc.ServiceError | null, response: get_config_pb.LayeredVoiceConfig) => void): grpc.ClientUnaryCall;
    public layeredVoiceConfig(request: get_config_pb.LayeredVoiceConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: get_config_pb.LayeredVoiceConfig) => void): grpc.ClientUnaryCall;
    public layeredVoiceConfig(request: get_config_pb.LayeredVoiceConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: get_config_pb.LayeredVoiceConfig) => void): grpc.ClientUnaryCall;
    public readName(request: get_config_pb.ReadNameRequest, callback: (error: grpc.ServiceError | null, response: get_config_pb.ReadName) => void): grpc.ClientUnaryCall;
    public readName(request: get_config_pb.ReadNameRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: get_config_pb.ReadName) => void): grpc.ClientUnaryCall;
    public readName(request: get_config_pb.ReadNameRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: get_config_pb.ReadName) => void): grpc.ClientUnaryCall;
    public updateStream(request: get_config_pb.VoiceConfigUpdateStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<get_config_pb.VoiceConfigUpdateInfo>;
    public updateStream(request: get_config_pb.VoiceConfigUpdateStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<get_config_pb.VoiceConfigUpdateInfo>;
}
