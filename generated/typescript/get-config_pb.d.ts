// package: management_app.config.get
// file: get-config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as config_pb from "./config_pb";

export class LayeredVoiceConfig extends jspb.Message { 

    hasKind(): boolean;
    clearKind(): void;
    getKind(): string;
    setKind(value: string): LayeredVoiceConfig;


    hasReadname(): boolean;
    clearReadname(): void;
    getReadname(): string;
    setReadname(value: string): LayeredVoiceConfig;


    hasSpeed(): boolean;
    clearSpeed(): void;
    getSpeed(): number;
    setSpeed(value: number): LayeredVoiceConfig;


    hasTone(): boolean;
    clearTone(): void;
    getTone(): number;
    setTone(value: number): LayeredVoiceConfig;


    hasVolume(): boolean;
    clearVolume(): void;
    getVolume(): number;
    setVolume(value: number): LayeredVoiceConfig;


    hasAllpass(): boolean;
    clearAllpass(): void;
    getAllpass(): number;
    setAllpass(value: number): LayeredVoiceConfig;


    hasIntone(): boolean;
    clearIntone(): void;
    getIntone(): number;
    setIntone(value: number): LayeredVoiceConfig;


    hasThreshold(): boolean;
    clearThreshold(): void;
    getThreshold(): number;
    setThreshold(value: number): LayeredVoiceConfig;


    hasRandomizer(): boolean;
    clearRandomizer(): void;
    getRandomizer(): string;
    setRandomizer(value: string): LayeredVoiceConfig;


    getKindOptionalCase(): LayeredVoiceConfig.KindOptionalCase;
    getReadNameOptionalCase(): LayeredVoiceConfig.ReadNameOptionalCase;
    getSpeedOptionalCase(): LayeredVoiceConfig.SpeedOptionalCase;
    getToneOptionalCase(): LayeredVoiceConfig.ToneOptionalCase;
    getVolumeOptionalCase(): LayeredVoiceConfig.VolumeOptionalCase;
    getAllpassOptionalCase(): LayeredVoiceConfig.AllpassOptionalCase;
    getIntoneOptionalCase(): LayeredVoiceConfig.IntoneOptionalCase;
    getThresholdOptionalCase(): LayeredVoiceConfig.ThresholdOptionalCase;
    getRandomizerOptionalCase(): LayeredVoiceConfig.RandomizerOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LayeredVoiceConfig.AsObject;
    static toObject(includeInstance: boolean, msg: LayeredVoiceConfig): LayeredVoiceConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LayeredVoiceConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LayeredVoiceConfig;
    static deserializeBinaryFromReader(message: LayeredVoiceConfig, reader: jspb.BinaryReader): LayeredVoiceConfig;
}

export namespace LayeredVoiceConfig {
    export type AsObject = {
        kind: string,
        readname: string,
        speed: number,
        tone: number,
        volume: number,
        allpass: number,
        intone: number,
        threshold: number,
        randomizer: string,
    }

    export enum KindOptionalCase {
        KIND_OPTIONAL_NOT_SET = 0,
    
    KIND = 1,

    }

    export enum ReadNameOptionalCase {
        READNAME_OPTIONAL_NOT_SET = 0,
    
    READNAME = 2,

    }

    export enum SpeedOptionalCase {
        SPEED_OPTIONAL_NOT_SET = 0,
    
    SPEED = 3,

    }

    export enum ToneOptionalCase {
        TONE_OPTIONAL_NOT_SET = 0,
    
    TONE = 4,

    }

    export enum VolumeOptionalCase {
        VOLUME_OPTIONAL_NOT_SET = 0,
    
    VOLUME = 5,

    }

    export enum AllpassOptionalCase {
        ALLPASS_OPTIONAL_NOT_SET = 0,
    
    ALLPASS = 6,

    }

    export enum IntoneOptionalCase {
        INTONE_OPTIONAL_NOT_SET = 0,
    
    INTONE = 7,

    }

    export enum ThresholdOptionalCase {
        THRESHOLD_OPTIONAL_NOT_SET = 0,
    
    THRESHOLD = 8,

    }

    export enum RandomizerOptionalCase {
        RANDOMIZER_OPTIONAL_NOT_SET = 0,
    
    RANDOMIZER = 9,

    }

}

export class GuildVoiceConfig extends jspb.Message { 

    hasMaxreadlimit(): boolean;
    clearMaxreadlimit(): void;
    getMaxreadlimit(): number;
    setMaxreadlimit(value: number): GuildVoiceConfig;


    hasMaxvolume(): boolean;
    clearMaxvolume(): void;
    getMaxvolume(): number;
    setMaxvolume(value: number): GuildVoiceConfig;


    hasReadname(): boolean;
    clearReadname(): void;
    getReadname(): boolean;
    setReadname(value: boolean): GuildVoiceConfig;


    hasRandomizer(): boolean;
    clearRandomizer(): void;
    getRandomizer(): string;
    setRandomizer(value: string): GuildVoiceConfig;


    hasDictionary(): boolean;
    clearDictionary(): void;
    getDictionary(): config_pb.Dictionary | undefined;
    setDictionary(value?: config_pb.Dictionary): GuildVoiceConfig;


    getMaxReadLimitOptionalCase(): GuildVoiceConfig.MaxReadLimitOptionalCase;
    getMaxVolumeOptionalCase(): GuildVoiceConfig.MaxVolumeOptionalCase;
    getReadNameOptionalCase(): GuildVoiceConfig.ReadNameOptionalCase;
    getRandomizerOptionalCase(): GuildVoiceConfig.RandomizerOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GuildVoiceConfig.AsObject;
    static toObject(includeInstance: boolean, msg: GuildVoiceConfig): GuildVoiceConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GuildVoiceConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GuildVoiceConfig;
    static deserializeBinaryFromReader(message: GuildVoiceConfig, reader: jspb.BinaryReader): GuildVoiceConfig;
}

export namespace GuildVoiceConfig {
    export type AsObject = {
        maxreadlimit: number,
        maxvolume: number,
        readname: boolean,
        randomizer: string,
        dictionary?: config_pb.Dictionary.AsObject,
    }

    export enum MaxReadLimitOptionalCase {
        MAXREADLIMIT_OPTIONAL_NOT_SET = 0,
    
    MAXREADLIMIT = 1,

    }

    export enum MaxVolumeOptionalCase {
        MAXVOLUME_OPTIONAL_NOT_SET = 0,
    
    MAXVOLUME = 2,

    }

    export enum ReadNameOptionalCase {
        READNAME_OPTIONAL_NOT_SET = 0,
    
    READNAME = 3,

    }

    export enum RandomizerOptionalCase {
        RANDOMIZER_OPTIONAL_NOT_SET = 0,
    
    RANDOMIZER = 4,

    }

}

export class LayeredVoiceConfigRequest extends jspb.Message { 
    getUser(): string;
    setUser(value: string): LayeredVoiceConfigRequest;

    getGuild(): string;
    setGuild(value: string): LayeredVoiceConfigRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LayeredVoiceConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LayeredVoiceConfigRequest): LayeredVoiceConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LayeredVoiceConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LayeredVoiceConfigRequest;
    static deserializeBinaryFromReader(message: LayeredVoiceConfigRequest, reader: jspb.BinaryReader): LayeredVoiceConfigRequest;
}

export namespace LayeredVoiceConfigRequest {
    export type AsObject = {
        user: string,
        guild: string,
    }
}

export class GuildVoiceConfigRequest extends jspb.Message { 
    getGuild(): string;
    setGuild(value: string): GuildVoiceConfigRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GuildVoiceConfigRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GuildVoiceConfigRequest): GuildVoiceConfigRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GuildVoiceConfigRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GuildVoiceConfigRequest;
    static deserializeBinaryFromReader(message: GuildVoiceConfigRequest, reader: jspb.BinaryReader): GuildVoiceConfigRequest;
}

export namespace GuildVoiceConfigRequest {
    export type AsObject = {
        guild: string,
    }
}

export class ReadNameRequest extends jspb.Message { 
    getGuild(): string;
    setGuild(value: string): ReadNameRequest;

    getUser(): string;
    setUser(value: string): ReadNameRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadNameRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadNameRequest): ReadNameRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadNameRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadNameRequest;
    static deserializeBinaryFromReader(message: ReadNameRequest, reader: jspb.BinaryReader): ReadNameRequest;
}

export namespace ReadNameRequest {
    export type AsObject = {
        guild: string,
        user: string,
    }
}

export class ReadName extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): string;
    setValue(value: string): ReadName;


    getValueOptionalCase(): ReadName.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadName.AsObject;
    static toObject(includeInstance: boolean, msg: ReadName): ReadName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadName;
    static deserializeBinaryFromReader(message: ReadName, reader: jspb.BinaryReader): ReadName;
}

export namespace ReadName {
    export type AsObject = {
        value: string,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE = 1,

    }

}

export class ShardInfo extends jspb.Message { 
    getNumshards(): number;
    setNumshards(value: number): ShardInfo;

    getShardid(): number;
    setShardid(value: number): ShardInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShardInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ShardInfo): ShardInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShardInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShardInfo;
    static deserializeBinaryFromReader(message: ShardInfo, reader: jspb.BinaryReader): ShardInfo;
}

export namespace ShardInfo {
    export type AsObject = {
        numshards: number,
        shardid: number,
    }
}

export class VoiceConfigUpdateStreamRequest extends jspb.Message { 

    hasShard(): boolean;
    clearShard(): void;
    getShard(): ShardInfo | undefined;
    setShard(value?: ShardInfo): VoiceConfigUpdateStreamRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoiceConfigUpdateStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VoiceConfigUpdateStreamRequest): VoiceConfigUpdateStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoiceConfigUpdateStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoiceConfigUpdateStreamRequest;
    static deserializeBinaryFromReader(message: VoiceConfigUpdateStreamRequest, reader: jspb.BinaryReader): VoiceConfigUpdateStreamRequest;
}

export namespace VoiceConfigUpdateStreamRequest {
    export type AsObject = {
        shard?: ShardInfo.AsObject,
    }
}

export class VoiceConfigUpdateInfo extends jspb.Message { 
    getType(): VoiceConfigUpdateInfoType;
    setType(value: VoiceConfigUpdateInfoType): VoiceConfigUpdateInfo;

    getGuild(): string;
    setGuild(value: string): VoiceConfigUpdateInfo;

    getUser(): string;
    setUser(value: string): VoiceConfigUpdateInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoiceConfigUpdateInfo.AsObject;
    static toObject(includeInstance: boolean, msg: VoiceConfigUpdateInfo): VoiceConfigUpdateInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoiceConfigUpdateInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoiceConfigUpdateInfo;
    static deserializeBinaryFromReader(message: VoiceConfigUpdateInfo, reader: jspb.BinaryReader): VoiceConfigUpdateInfo;
}

export namespace VoiceConfigUpdateInfo {
    export type AsObject = {
        type: VoiceConfigUpdateInfoType,
        guild: string,
        user: string,
    }
}

export enum VoiceConfigUpdateInfoType {
    UNKNOWN = 0,
    GUILD = 1,
    USER = 2,
    MEMBER = 3,
}
