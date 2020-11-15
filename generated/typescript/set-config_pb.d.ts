// package: 
// file: set-config.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as config_pb from "./config_pb";

export class Target extends jspb.Message { 
    getGuild(): string;
    setGuild(value: string): Target;

    getUser(): string;
    setUser(value: string): Target;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Target.AsObject;
    static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Target;
    static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
}

export namespace Target {
    export type AsObject = {
        guild: string,
        user: string,
    }
}

export class UpdateResultError extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): UpdateResultError;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultError.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultError): UpdateResultError.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultError, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultError;
    static deserializeBinaryFromReader(message: UpdateResultError, reader: jspb.BinaryReader): UpdateResultError;
}

export namespace UpdateResultError {
    export type AsObject = {
        message: string,
    }
}

export class UpdateString extends jspb.Message { 

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): Target | undefined;
    setTarget(value?: Target): UpdateString;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): string;
    setValue(value: string): UpdateString;


    getValueOptionalCase(): UpdateString.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateString.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateString): UpdateString.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateString, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateString;
    static deserializeBinaryFromReader(message: UpdateString, reader: jspb.BinaryReader): UpdateString;
}

export namespace UpdateString {
    export type AsObject = {
        target?: Target.AsObject,
        value: string,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE = 2,

    }

}

export class UpdateResultStringOk extends jspb.Message { 

    hasBefore(): boolean;
    clearBefore(): void;
    getBefore(): string;
    setBefore(value: string): UpdateResultStringOk;


    hasAfter(): boolean;
    clearAfter(): void;
    getAfter(): string;
    setAfter(value: string): UpdateResultStringOk;


    getBeforeOptionalCase(): UpdateResultStringOk.BeforeOptionalCase;
    getAfterOptionalCase(): UpdateResultStringOk.AfterOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultStringOk.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultStringOk): UpdateResultStringOk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultStringOk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultStringOk;
    static deserializeBinaryFromReader(message: UpdateResultStringOk, reader: jspb.BinaryReader): UpdateResultStringOk;
}

export namespace UpdateResultStringOk {
    export type AsObject = {
        before: string,
        after: string,
    }

    export enum BeforeOptionalCase {
        BEFORE_OPTIONAL_NOT_SET = 0,
    
    BEFORE = 1,

    }

    export enum AfterOptionalCase {
        AFTER_OPTIONAL_NOT_SET = 0,
    
    AFTER = 2,

    }

}

export class UpdateResultStringSame extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): string;
    setValue(value: string): UpdateResultStringSame;


    getValueOptionalCase(): UpdateResultStringSame.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultStringSame.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultStringSame): UpdateResultStringSame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultStringSame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultStringSame;
    static deserializeBinaryFromReader(message: UpdateResultStringSame, reader: jspb.BinaryReader): UpdateResultStringSame;
}

export namespace UpdateResultStringSame {
    export type AsObject = {
        value: string,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE = 1,

    }

}

export class UpdateResultString extends jspb.Message { 

    hasResultok(): boolean;
    clearResultok(): void;
    getResultok(): UpdateResultStringOk | undefined;
    setResultok(value?: UpdateResultStringOk): UpdateResultString;


    hasResultsame(): boolean;
    clearResultsame(): void;
    getResultsame(): UpdateResultStringSame | undefined;
    setResultsame(value?: UpdateResultStringSame): UpdateResultString;


    hasError(): boolean;
    clearError(): void;
    getError(): UpdateResultError | undefined;
    setError(value?: UpdateResultError): UpdateResultString;


    getUpdateResultCase(): UpdateResultString.UpdateResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultString.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultString): UpdateResultString.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultString, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultString;
    static deserializeBinaryFromReader(message: UpdateResultString, reader: jspb.BinaryReader): UpdateResultString;
}

export namespace UpdateResultString {
    export type AsObject = {
        resultok?: UpdateResultStringOk.AsObject,
        resultsame?: UpdateResultStringSame.AsObject,
        error?: UpdateResultError.AsObject,
    }

    export enum UpdateResultCase {
        UPDATERESULT_NOT_SET = 0,
    
    RESULTOK = 1,

    RESULTSAME = 2,

    ERROR = 3,

    }

}

export class UpdateFloat extends jspb.Message { 

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): Target | undefined;
    setTarget(value?: Target): UpdateFloat;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): number;
    setValue(value: number): UpdateFloat;


    getValueOptionalCase(): UpdateFloat.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFloat.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFloat): UpdateFloat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFloat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFloat;
    static deserializeBinaryFromReader(message: UpdateFloat, reader: jspb.BinaryReader): UpdateFloat;
}

export namespace UpdateFloat {
    export type AsObject = {
        target?: Target.AsObject,
        value: number,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE = 2,

    }

}

export class UpdateResultFloatOk extends jspb.Message { 

    hasBefore(): boolean;
    clearBefore(): void;
    getBefore(): number;
    setBefore(value: number): UpdateResultFloatOk;


    hasAfter(): boolean;
    clearAfter(): void;
    getAfter(): number;
    setAfter(value: number): UpdateResultFloatOk;


    getBeforeOptionalCase(): UpdateResultFloatOk.BeforeOptionalCase;
    getAfterOptionalCase(): UpdateResultFloatOk.AfterOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultFloatOk.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultFloatOk): UpdateResultFloatOk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultFloatOk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultFloatOk;
    static deserializeBinaryFromReader(message: UpdateResultFloatOk, reader: jspb.BinaryReader): UpdateResultFloatOk;
}

export namespace UpdateResultFloatOk {
    export type AsObject = {
        before: number,
        after: number,
    }

    export enum BeforeOptionalCase {
        BEFORE_OPTIONAL_NOT_SET = 0,
    
    BEFORE = 1,

    }

    export enum AfterOptionalCase {
        AFTER_OPTIONAL_NOT_SET = 0,
    
    AFTER = 2,

    }

}

export class UpdateResultFloatSame extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): number;
    setValue(value: number): UpdateResultFloatSame;


    getValueOptionalCase(): UpdateResultFloatSame.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultFloatSame.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultFloatSame): UpdateResultFloatSame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultFloatSame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultFloatSame;
    static deserializeBinaryFromReader(message: UpdateResultFloatSame, reader: jspb.BinaryReader): UpdateResultFloatSame;
}

export namespace UpdateResultFloatSame {
    export type AsObject = {
        value: number,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE = 1,

    }

}

export class UpdateResultFloat extends jspb.Message { 

    hasResultok(): boolean;
    clearResultok(): void;
    getResultok(): UpdateResultFloatOk | undefined;
    setResultok(value?: UpdateResultFloatOk): UpdateResultFloat;


    hasResultsame(): boolean;
    clearResultsame(): void;
    getResultsame(): UpdateResultFloatSame | undefined;
    setResultsame(value?: UpdateResultFloatSame): UpdateResultFloat;


    hasError(): boolean;
    clearError(): void;
    getError(): UpdateResultError | undefined;
    setError(value?: UpdateResultError): UpdateResultFloat;


    getUpdateResultCase(): UpdateResultFloat.UpdateResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultFloat.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultFloat): UpdateResultFloat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultFloat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultFloat;
    static deserializeBinaryFromReader(message: UpdateResultFloat, reader: jspb.BinaryReader): UpdateResultFloat;
}

export namespace UpdateResultFloat {
    export type AsObject = {
        resultok?: UpdateResultFloatOk.AsObject,
        resultsame?: UpdateResultFloatSame.AsObject,
        error?: UpdateResultError.AsObject,
    }

    export enum UpdateResultCase {
        UPDATERESULT_NOT_SET = 0,
    
    RESULTOK = 1,

    RESULTSAME = 2,

    ERROR = 3,

    }

}

export class UpdateReadName extends jspb.Message { 

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): Target | undefined;
    setTarget(value?: Target): UpdateReadName;


    hasValueString(): boolean;
    clearValueString(): void;
    getValueString(): string;
    setValueString(value: string): UpdateReadName;


    hasValueBool(): boolean;
    clearValueBool(): void;
    getValueBool(): boolean;
    setValueBool(value: boolean): UpdateReadName;


    getValueOptionalCase(): UpdateReadName.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateReadName.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateReadName): UpdateReadName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateReadName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateReadName;
    static deserializeBinaryFromReader(message: UpdateReadName, reader: jspb.BinaryReader): UpdateReadName;
}

export namespace UpdateReadName {
    export type AsObject = {
        target?: Target.AsObject,
        valueString: string,
        valueBool: boolean,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE_STRING = 2,

    VALUE_BOOL = 3,

    }

}

export class UpdateReadNameOk extends jspb.Message { 

    hasBeforeString(): boolean;
    clearBeforeString(): void;
    getBeforeString(): string;
    setBeforeString(value: string): UpdateReadNameOk;


    hasBeforeBool(): boolean;
    clearBeforeBool(): void;
    getBeforeBool(): boolean;
    setBeforeBool(value: boolean): UpdateReadNameOk;


    hasAfterString(): boolean;
    clearAfterString(): void;
    getAfterString(): string;
    setAfterString(value: string): UpdateReadNameOk;


    hasAfterBool(): boolean;
    clearAfterBool(): void;
    getAfterBool(): boolean;
    setAfterBool(value: boolean): UpdateReadNameOk;


    getBeforeOptionalCase(): UpdateReadNameOk.BeforeOptionalCase;
    getAfterOptionalCase(): UpdateReadNameOk.AfterOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateReadNameOk.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateReadNameOk): UpdateReadNameOk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateReadNameOk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateReadNameOk;
    static deserializeBinaryFromReader(message: UpdateReadNameOk, reader: jspb.BinaryReader): UpdateReadNameOk;
}

export namespace UpdateReadNameOk {
    export type AsObject = {
        beforeString: string,
        beforeBool: boolean,
        afterString: string,
        afterBool: boolean,
    }

    export enum BeforeOptionalCase {
        BEFORE_OPTIONAL_NOT_SET = 0,
    
    BEFORE_STRING = 1,

    BEFORE_BOOL = 2,

    }

    export enum AfterOptionalCase {
        AFTER_OPTIONAL_NOT_SET = 0,
    
    AFTER_STRING = 3,

    AFTER_BOOL = 4,

    }

}

export class UpdateResultReadNameSame extends jspb.Message { 

    hasValueString(): boolean;
    clearValueString(): void;
    getValueString(): string;
    setValueString(value: string): UpdateResultReadNameSame;


    hasValueBool(): boolean;
    clearValueBool(): void;
    getValueBool(): boolean;
    setValueBool(value: boolean): UpdateResultReadNameSame;


    getValueOptionalCase(): UpdateResultReadNameSame.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultReadNameSame.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultReadNameSame): UpdateResultReadNameSame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultReadNameSame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultReadNameSame;
    static deserializeBinaryFromReader(message: UpdateResultReadNameSame, reader: jspb.BinaryReader): UpdateResultReadNameSame;
}

export namespace UpdateResultReadNameSame {
    export type AsObject = {
        valueString: string,
        valueBool: boolean,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE_STRING = 1,

    VALUE_BOOL = 2,

    }

}

export class UpdateResultReadName extends jspb.Message { 

    hasResultok(): boolean;
    clearResultok(): void;
    getResultok(): UpdateReadNameOk | undefined;
    setResultok(value?: UpdateReadNameOk): UpdateResultReadName;


    hasResultsame(): boolean;
    clearResultsame(): void;
    getResultsame(): UpdateResultReadNameSame | undefined;
    setResultsame(value?: UpdateResultReadNameSame): UpdateResultReadName;


    hasError(): boolean;
    clearError(): void;
    getError(): UpdateResultError | undefined;
    setError(value?: UpdateResultError): UpdateResultReadName;


    getUpdateResultCase(): UpdateResultReadName.UpdateResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultReadName.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultReadName): UpdateResultReadName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultReadName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultReadName;
    static deserializeBinaryFromReader(message: UpdateResultReadName, reader: jspb.BinaryReader): UpdateResultReadName;
}

export namespace UpdateResultReadName {
    export type AsObject = {
        resultok?: UpdateReadNameOk.AsObject,
        resultsame?: UpdateResultReadNameSame.AsObject,
        error?: UpdateResultError.AsObject,
    }

    export enum UpdateResultCase {
        UPDATERESULT_NOT_SET = 0,
    
    RESULTOK = 1,

    RESULTSAME = 2,

    ERROR = 3,

    }

}

export class UpdateUint32 extends jspb.Message { 

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): Target | undefined;
    setTarget(value?: Target): UpdateUint32;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): number;
    setValue(value: number): UpdateUint32;


    getValueOptionalCase(): UpdateUint32.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUint32.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUint32): UpdateUint32.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUint32, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUint32;
    static deserializeBinaryFromReader(message: UpdateUint32, reader: jspb.BinaryReader): UpdateUint32;
}

export namespace UpdateUint32 {
    export type AsObject = {
        target?: Target.AsObject,
        value: number,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE = 2,

    }

}

export class UpdateResultUint32Ok extends jspb.Message { 

    hasBefore(): boolean;
    clearBefore(): void;
    getBefore(): number;
    setBefore(value: number): UpdateResultUint32Ok;


    hasAfter(): boolean;
    clearAfter(): void;
    getAfter(): number;
    setAfter(value: number): UpdateResultUint32Ok;


    getBeforeOptionalCase(): UpdateResultUint32Ok.BeforeOptionalCase;
    getAfterOptionalCase(): UpdateResultUint32Ok.AfterOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultUint32Ok.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultUint32Ok): UpdateResultUint32Ok.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultUint32Ok, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultUint32Ok;
    static deserializeBinaryFromReader(message: UpdateResultUint32Ok, reader: jspb.BinaryReader): UpdateResultUint32Ok;
}

export namespace UpdateResultUint32Ok {
    export type AsObject = {
        before: number,
        after: number,
    }

    export enum BeforeOptionalCase {
        BEFORE_OPTIONAL_NOT_SET = 0,
    
    BEFORE = 1,

    }

    export enum AfterOptionalCase {
        AFTER_OPTIONAL_NOT_SET = 0,
    
    AFTER = 2,

    }

}

export class UpdateResultUint32Same extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): number;
    setValue(value: number): UpdateResultUint32Same;


    getValueOptionalCase(): UpdateResultUint32Same.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultUint32Same.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultUint32Same): UpdateResultUint32Same.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultUint32Same, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultUint32Same;
    static deserializeBinaryFromReader(message: UpdateResultUint32Same, reader: jspb.BinaryReader): UpdateResultUint32Same;
}

export namespace UpdateResultUint32Same {
    export type AsObject = {
        value: number,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE = 1,

    }

}

export class UpdateResultUint32 extends jspb.Message { 

    hasResultok(): boolean;
    clearResultok(): void;
    getResultok(): UpdateResultUint32Ok | undefined;
    setResultok(value?: UpdateResultUint32Ok): UpdateResultUint32;


    hasResultsame(): boolean;
    clearResultsame(): void;
    getResultsame(): UpdateResultUint32Same | undefined;
    setResultsame(value?: UpdateResultUint32Same): UpdateResultUint32;


    hasError(): boolean;
    clearError(): void;
    getError(): UpdateResultError | undefined;
    setError(value?: UpdateResultError): UpdateResultUint32;


    getUpdateResultCase(): UpdateResultUint32.UpdateResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultUint32.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultUint32): UpdateResultUint32.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultUint32, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultUint32;
    static deserializeBinaryFromReader(message: UpdateResultUint32, reader: jspb.BinaryReader): UpdateResultUint32;
}

export namespace UpdateResultUint32 {
    export type AsObject = {
        resultok?: UpdateResultUint32Ok.AsObject,
        resultsame?: UpdateResultUint32Same.AsObject,
        error?: UpdateResultError.AsObject,
    }

    export enum UpdateResultCase {
        UPDATERESULT_NOT_SET = 0,
    
    RESULTOK = 1,

    RESULTSAME = 2,

    ERROR = 3,

    }

}

export class RemoveFromMainDictionary extends jspb.Message { 
    getGuild(): string;
    setGuild(value: string): RemoveFromMainDictionary;

    getKey(): string;
    setKey(value: string): RemoveFromMainDictionary;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveFromMainDictionary.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveFromMainDictionary): RemoveFromMainDictionary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveFromMainDictionary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveFromMainDictionary;
    static deserializeBinaryFromReader(message: RemoveFromMainDictionary, reader: jspb.BinaryReader): RemoveFromMainDictionary;
}

export namespace RemoveFromMainDictionary {
    export type AsObject = {
        guild: string,
        key: string,
    }
}

export class UpdateResultDictionaryEntryAOk extends jspb.Message { 

    hasBefore(): boolean;
    clearBefore(): void;
    getBefore(): config_pb.DictionaryEntryA | undefined;
    setBefore(value?: config_pb.DictionaryEntryA): UpdateResultDictionaryEntryAOk;


    hasAfter(): boolean;
    clearAfter(): void;
    getAfter(): config_pb.DictionaryEntryA | undefined;
    setAfter(value?: config_pb.DictionaryEntryA): UpdateResultDictionaryEntryAOk;


    getBeforeOptionalCase(): UpdateResultDictionaryEntryAOk.BeforeOptionalCase;
    getAfterOptionalCase(): UpdateResultDictionaryEntryAOk.AfterOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultDictionaryEntryAOk.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultDictionaryEntryAOk): UpdateResultDictionaryEntryAOk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultDictionaryEntryAOk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultDictionaryEntryAOk;
    static deserializeBinaryFromReader(message: UpdateResultDictionaryEntryAOk, reader: jspb.BinaryReader): UpdateResultDictionaryEntryAOk;
}

export namespace UpdateResultDictionaryEntryAOk {
    export type AsObject = {
        before?: config_pb.DictionaryEntryA.AsObject,
        after?: config_pb.DictionaryEntryA.AsObject,
    }

    export enum BeforeOptionalCase {
        BEFORE_OPTIONAL_NOT_SET = 0,
    
    BEFORE = 1,

    }

    export enum AfterOptionalCase {
        AFTER_OPTIONAL_NOT_SET = 0,
    
    AFTER = 2,

    }

}

export class UpdateResultDictionaryEntryASame extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): config_pb.DictionaryEntryA | undefined;
    setValue(value?: config_pb.DictionaryEntryA): UpdateResultDictionaryEntryASame;


    getValueOptionalCase(): UpdateResultDictionaryEntryASame.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultDictionaryEntryASame.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultDictionaryEntryASame): UpdateResultDictionaryEntryASame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultDictionaryEntryASame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultDictionaryEntryASame;
    static deserializeBinaryFromReader(message: UpdateResultDictionaryEntryASame, reader: jspb.BinaryReader): UpdateResultDictionaryEntryASame;
}

export namespace UpdateResultDictionaryEntryASame {
    export type AsObject = {
        value?: config_pb.DictionaryEntryA.AsObject,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE = 1,

    }

}

export class UpdateResultDictionaryEntryA extends jspb.Message { 

    hasResultok(): boolean;
    clearResultok(): void;
    getResultok(): UpdateResultDictionaryEntryAOk | undefined;
    setResultok(value?: UpdateResultDictionaryEntryAOk): UpdateResultDictionaryEntryA;


    hasResultsame(): boolean;
    clearResultsame(): void;
    getResultsame(): UpdateResultDictionaryEntryASame | undefined;
    setResultsame(value?: UpdateResultDictionaryEntryASame): UpdateResultDictionaryEntryA;


    hasError(): boolean;
    clearError(): void;
    getError(): UpdateResultError | undefined;
    setError(value?: UpdateResultError): UpdateResultDictionaryEntryA;


    getUpdateResultCase(): UpdateResultDictionaryEntryA.UpdateResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultDictionaryEntryA.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultDictionaryEntryA): UpdateResultDictionaryEntryA.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultDictionaryEntryA, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultDictionaryEntryA;
    static deserializeBinaryFromReader(message: UpdateResultDictionaryEntryA, reader: jspb.BinaryReader): UpdateResultDictionaryEntryA;
}

export namespace UpdateResultDictionaryEntryA {
    export type AsObject = {
        resultok?: UpdateResultDictionaryEntryAOk.AsObject,
        resultsame?: UpdateResultDictionaryEntryASame.AsObject,
        error?: UpdateResultError.AsObject,
    }

    export enum UpdateResultCase {
        UPDATERESULT_NOT_SET = 0,
    
    RESULTOK = 1,

    RESULTSAME = 2,

    ERROR = 3,

    }

}

export class UpdateOrInsertMainDictionary extends jspb.Message { 
    getGuild(): string;
    setGuild(value: string): UpdateOrInsertMainDictionary;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): config_pb.DictionaryEntryA | undefined;
    setValue(value?: config_pb.DictionaryEntryA): UpdateOrInsertMainDictionary;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateOrInsertMainDictionary.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateOrInsertMainDictionary): UpdateOrInsertMainDictionary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateOrInsertMainDictionary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateOrInsertMainDictionary;
    static deserializeBinaryFromReader(message: UpdateOrInsertMainDictionary, reader: jspb.BinaryReader): UpdateOrInsertMainDictionary;
}

export namespace UpdateOrInsertMainDictionary {
    export type AsObject = {
        guild: string,
        value?: config_pb.DictionaryEntryA.AsObject,
    }
}

export class SimpleDictionaryUpdateTargetGuild extends jspb.Message { 
    getGuild(): string;
    setGuild(value: string): SimpleDictionaryUpdateTargetGuild;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleDictionaryUpdateTargetGuild.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleDictionaryUpdateTargetGuild): SimpleDictionaryUpdateTargetGuild.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleDictionaryUpdateTargetGuild, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleDictionaryUpdateTargetGuild;
    static deserializeBinaryFromReader(message: SimpleDictionaryUpdateTargetGuild, reader: jspb.BinaryReader): SimpleDictionaryUpdateTargetGuild;
}

export namespace SimpleDictionaryUpdateTargetGuild {
    export type AsObject = {
        guild: string,
    }
}

export class SimpleDictionaryUpdateTargetSharedDictionary extends jspb.Message { 
    getId(): string;
    setId(value: string): SimpleDictionaryUpdateTargetSharedDictionary;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleDictionaryUpdateTargetSharedDictionary.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleDictionaryUpdateTargetSharedDictionary): SimpleDictionaryUpdateTargetSharedDictionary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleDictionaryUpdateTargetSharedDictionary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleDictionaryUpdateTargetSharedDictionary;
    static deserializeBinaryFromReader(message: SimpleDictionaryUpdateTargetSharedDictionary, reader: jspb.BinaryReader): SimpleDictionaryUpdateTargetSharedDictionary;
}

export namespace SimpleDictionaryUpdateTargetSharedDictionary {
    export type AsObject = {
        id: string,
    }
}

export class SimpleDictionaryUpdateTarget extends jspb.Message { 

    hasBefore(): boolean;
    clearBefore(): void;
    getBefore(): SimpleDictionaryUpdateTargetGuild | undefined;
    setBefore(value?: SimpleDictionaryUpdateTargetGuild): SimpleDictionaryUpdateTarget;


    hasAfter(): boolean;
    clearAfter(): void;
    getAfter(): SimpleDictionaryUpdateTargetGuild | undefined;
    setAfter(value?: SimpleDictionaryUpdateTargetGuild): SimpleDictionaryUpdateTarget;


    hasShared(): boolean;
    clearShared(): void;
    getShared(): SimpleDictionaryUpdateTargetSharedDictionary | undefined;
    setShared(value?: SimpleDictionaryUpdateTargetSharedDictionary): SimpleDictionaryUpdateTarget;


    getTargetCase(): SimpleDictionaryUpdateTarget.TargetCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleDictionaryUpdateTarget.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleDictionaryUpdateTarget): SimpleDictionaryUpdateTarget.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleDictionaryUpdateTarget, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleDictionaryUpdateTarget;
    static deserializeBinaryFromReader(message: SimpleDictionaryUpdateTarget, reader: jspb.BinaryReader): SimpleDictionaryUpdateTarget;
}

export namespace SimpleDictionaryUpdateTarget {
    export type AsObject = {
        before?: SimpleDictionaryUpdateTargetGuild.AsObject,
        after?: SimpleDictionaryUpdateTargetGuild.AsObject,
        shared?: SimpleDictionaryUpdateTargetSharedDictionary.AsObject,
    }

    export enum TargetCase {
        TARGET_NOT_SET = 0,
    
    BEFORE = 1,

    AFTER = 2,

    SHARED = 3,

    }

}

export class UpdateSimpleDictionary extends jspb.Message { 

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): SimpleDictionaryUpdateTarget | undefined;
    setTarget(value?: SimpleDictionaryUpdateTarget): UpdateSimpleDictionary;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): config_pb.DictionaryEntryB | undefined;
    setValue(value?: config_pb.DictionaryEntryB): UpdateSimpleDictionary;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateSimpleDictionary.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateSimpleDictionary): UpdateSimpleDictionary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateSimpleDictionary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateSimpleDictionary;
    static deserializeBinaryFromReader(message: UpdateSimpleDictionary, reader: jspb.BinaryReader): UpdateSimpleDictionary;
}

export namespace UpdateSimpleDictionary {
    export type AsObject = {
        target?: SimpleDictionaryUpdateTarget.AsObject,
        value?: config_pb.DictionaryEntryB.AsObject,
    }
}

export class InsertSimpleDictionary extends jspb.Message { 

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): SimpleDictionaryUpdateTarget | undefined;
    setTarget(value?: SimpleDictionaryUpdateTarget): InsertSimpleDictionary;


    hasValue(): boolean;
    clearValue(): void;
    getValue(): config_pb.DictionaryEntryB | undefined;
    setValue(value?: config_pb.DictionaryEntryB): InsertSimpleDictionary;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InsertSimpleDictionary.AsObject;
    static toObject(includeInstance: boolean, msg: InsertSimpleDictionary): InsertSimpleDictionary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InsertSimpleDictionary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InsertSimpleDictionary;
    static deserializeBinaryFromReader(message: InsertSimpleDictionary, reader: jspb.BinaryReader): InsertSimpleDictionary;
}

export namespace InsertSimpleDictionary {
    export type AsObject = {
        target?: SimpleDictionaryUpdateTarget.AsObject,
        value?: config_pb.DictionaryEntryB.AsObject,
    }
}

export class AddSimpleDictionary extends jspb.Message { 

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): SimpleDictionaryUpdateTarget | undefined;
    setTarget(value?: SimpleDictionaryUpdateTarget): AddSimpleDictionary;

    getFrom(): string;
    setFrom(value: string): AddSimpleDictionary;

    getTo(): string;
    setTo(value: string): AddSimpleDictionary;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddSimpleDictionary.AsObject;
    static toObject(includeInstance: boolean, msg: AddSimpleDictionary): AddSimpleDictionary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddSimpleDictionary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddSimpleDictionary;
    static deserializeBinaryFromReader(message: AddSimpleDictionary, reader: jspb.BinaryReader): AddSimpleDictionary;
}

export namespace AddSimpleDictionary {
    export type AsObject = {
        target?: SimpleDictionaryUpdateTarget.AsObject,
        from: string,
        to: string,
    }
}

export class RemoveSimpleDictionary extends jspb.Message { 

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): SimpleDictionaryUpdateTarget | undefined;
    setTarget(value?: SimpleDictionaryUpdateTarget): RemoveSimpleDictionary;

    getIndex(): number;
    setIndex(value: number): RemoveSimpleDictionary;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveSimpleDictionary.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveSimpleDictionary): RemoveSimpleDictionary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveSimpleDictionary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveSimpleDictionary;
    static deserializeBinaryFromReader(message: RemoveSimpleDictionary, reader: jspb.BinaryReader): RemoveSimpleDictionary;
}

export namespace RemoveSimpleDictionary {
    export type AsObject = {
        target?: SimpleDictionaryUpdateTarget.AsObject,
        index: number,
    }
}

export class UpdateResultDictionaryEntryBOk extends jspb.Message { 

    hasBefore(): boolean;
    clearBefore(): void;
    getBefore(): config_pb.DictionaryEntryB | undefined;
    setBefore(value?: config_pb.DictionaryEntryB): UpdateResultDictionaryEntryBOk;


    hasAfter(): boolean;
    clearAfter(): void;
    getAfter(): config_pb.DictionaryEntryB | undefined;
    setAfter(value?: config_pb.DictionaryEntryB): UpdateResultDictionaryEntryBOk;


    getBeforeOptionalCase(): UpdateResultDictionaryEntryBOk.BeforeOptionalCase;
    getAfterOptionalCase(): UpdateResultDictionaryEntryBOk.AfterOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultDictionaryEntryBOk.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultDictionaryEntryBOk): UpdateResultDictionaryEntryBOk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultDictionaryEntryBOk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultDictionaryEntryBOk;
    static deserializeBinaryFromReader(message: UpdateResultDictionaryEntryBOk, reader: jspb.BinaryReader): UpdateResultDictionaryEntryBOk;
}

export namespace UpdateResultDictionaryEntryBOk {
    export type AsObject = {
        before?: config_pb.DictionaryEntryB.AsObject,
        after?: config_pb.DictionaryEntryB.AsObject,
    }

    export enum BeforeOptionalCase {
        BEFORE_OPTIONAL_NOT_SET = 0,
    
    BEFORE = 1,

    }

    export enum AfterOptionalCase {
        AFTER_OPTIONAL_NOT_SET = 0,
    
    AFTER = 2,

    }

}

export class UpdateResultDictionaryEntryBSame extends jspb.Message { 

    hasValue(): boolean;
    clearValue(): void;
    getValue(): config_pb.DictionaryEntryB | undefined;
    setValue(value?: config_pb.DictionaryEntryB): UpdateResultDictionaryEntryBSame;


    getValueOptionalCase(): UpdateResultDictionaryEntryBSame.ValueOptionalCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultDictionaryEntryBSame.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultDictionaryEntryBSame): UpdateResultDictionaryEntryBSame.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultDictionaryEntryBSame, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultDictionaryEntryBSame;
    static deserializeBinaryFromReader(message: UpdateResultDictionaryEntryBSame, reader: jspb.BinaryReader): UpdateResultDictionaryEntryBSame;
}

export namespace UpdateResultDictionaryEntryBSame {
    export type AsObject = {
        value?: config_pb.DictionaryEntryB.AsObject,
    }

    export enum ValueOptionalCase {
        VALUE_OPTIONAL_NOT_SET = 0,
    
    VALUE = 1,

    }

}

export class UpdateResultDictionaryEntryB extends jspb.Message { 

    hasResultok(): boolean;
    clearResultok(): void;
    getResultok(): UpdateResultDictionaryEntryBOk | undefined;
    setResultok(value?: UpdateResultDictionaryEntryBOk): UpdateResultDictionaryEntryB;


    hasResultsame(): boolean;
    clearResultsame(): void;
    getResultsame(): UpdateResultDictionaryEntryBSame | undefined;
    setResultsame(value?: UpdateResultDictionaryEntryBSame): UpdateResultDictionaryEntryB;


    hasError(): boolean;
    clearError(): void;
    getError(): UpdateResultError | undefined;
    setError(value?: UpdateResultError): UpdateResultDictionaryEntryB;


    getUpdateResultCase(): UpdateResultDictionaryEntryB.UpdateResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResultDictionaryEntryB.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResultDictionaryEntryB): UpdateResultDictionaryEntryB.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResultDictionaryEntryB, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResultDictionaryEntryB;
    static deserializeBinaryFromReader(message: UpdateResultDictionaryEntryB, reader: jspb.BinaryReader): UpdateResultDictionaryEntryB;
}

export namespace UpdateResultDictionaryEntryB {
    export type AsObject = {
        resultok?: UpdateResultDictionaryEntryBOk.AsObject,
        resultsame?: UpdateResultDictionaryEntryBSame.AsObject,
        error?: UpdateResultError.AsObject,
    }

    export enum UpdateResultCase {
        UPDATERESULT_NOT_SET = 0,
    
    RESULTOK = 1,

    RESULTSAME = 2,

    ERROR = 3,

    }

}

export class MoveSimpleDictionary extends jspb.Message { 

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): SimpleDictionaryUpdateTarget | undefined;
    setTarget(value?: SimpleDictionaryUpdateTarget): MoveSimpleDictionary;

    getFrom(): number;
    setFrom(value: number): MoveSimpleDictionary;

    getTo(): number;
    setTo(value: number): MoveSimpleDictionary;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveSimpleDictionary.AsObject;
    static toObject(includeInstance: boolean, msg: MoveSimpleDictionary): MoveSimpleDictionary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveSimpleDictionary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveSimpleDictionary;
    static deserializeBinaryFromReader(message: MoveSimpleDictionary, reader: jspb.BinaryReader): MoveSimpleDictionary;
}

export namespace MoveSimpleDictionary {
    export type AsObject = {
        target?: SimpleDictionaryUpdateTarget.AsObject,
        from: number,
        to: number,
    }
}

export class MoveSimpleDictionaryResultOk extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveSimpleDictionaryResultOk.AsObject;
    static toObject(includeInstance: boolean, msg: MoveSimpleDictionaryResultOk): MoveSimpleDictionaryResultOk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveSimpleDictionaryResultOk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveSimpleDictionaryResultOk;
    static deserializeBinaryFromReader(message: MoveSimpleDictionaryResultOk, reader: jspb.BinaryReader): MoveSimpleDictionaryResultOk;
}

export namespace MoveSimpleDictionaryResultOk {
    export type AsObject = {
    }
}

export class MoveSimpleDictionaryResult extends jspb.Message { 

    hasResultok(): boolean;
    clearResultok(): void;
    getResultok(): MoveSimpleDictionaryResultOk | undefined;
    setResultok(value?: MoveSimpleDictionaryResultOk): MoveSimpleDictionaryResult;


    hasError(): boolean;
    clearError(): void;
    getError(): UpdateResultError | undefined;
    setError(value?: UpdateResultError): MoveSimpleDictionaryResult;


    getResultCase(): MoveSimpleDictionaryResult.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveSimpleDictionaryResult.AsObject;
    static toObject(includeInstance: boolean, msg: MoveSimpleDictionaryResult): MoveSimpleDictionaryResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveSimpleDictionaryResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveSimpleDictionaryResult;
    static deserializeBinaryFromReader(message: MoveSimpleDictionaryResult, reader: jspb.BinaryReader): MoveSimpleDictionaryResult;
}

export namespace MoveSimpleDictionaryResult {
    export type AsObject = {
        resultok?: MoveSimpleDictionaryResultOk.AsObject,
        error?: UpdateResultError.AsObject,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
    
    RESULTOK = 1,

    ERROR = 2,

    }

}
