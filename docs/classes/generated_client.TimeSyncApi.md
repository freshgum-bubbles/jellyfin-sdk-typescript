[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TimeSyncApi

# Class: TimeSyncApi

[generated-client](../modules/generated_client.md).TimeSyncApi

TimeSyncApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`TimeSyncApi`**

## Table of contents

### Constructors

- [constructor](generated_client.TimeSyncApi.md#constructor)

### Properties

- [axios](generated_client.TimeSyncApi.md#axios)
- [basePath](generated_client.TimeSyncApi.md#basepath)
- [configuration](generated_client.TimeSyncApi.md#configuration)

### Methods

- [getUtcTime](generated_client.TimeSyncApi.md#getutctime)

## Constructors

### constructor

• **new TimeSyncApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](generated_client.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[generated-client/base.ts:52](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](generated_client.Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[generated-client/base.ts:50](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/base.ts#L50)

## Methods

### getUtcTime

▸ **getUtcTime**(`options?`): `Promise`<`AxiosResponse`<[`UtcTimeResponse`](../interfaces/index.api.UtcTimeResponse.md), `any`\>\>

**`summary`** Gets the current UTC time.

**`throws`** {RequiredError}

**`memberof`** TimeSyncApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`UtcTimeResponse`](../interfaces/index.api.UtcTimeResponse.md), `any`\>\>

#### Defined in

[generated-client/api/time-sync-api.ts:117](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/time-sync-api.ts#L117)
