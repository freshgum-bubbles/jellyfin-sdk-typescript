[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / TrailersApi

# Class: TrailersApi

[generated-client](../modules/generated_client.md).TrailersApi

TrailersApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`TrailersApi`**

## Table of contents

### Constructors

- [constructor](generated_client.TrailersApi.md#constructor)

### Properties

- [axios](generated_client.TrailersApi.md#axios)
- [basePath](generated_client.TrailersApi.md#basepath)
- [configuration](generated_client.TrailersApi.md#configuration)

### Methods

- [getTrailers](generated_client.TrailersApi.md#gettrailers)

## Constructors

### constructor

• **new TrailersApi**(`configuration?`, `basePath?`, `axios?`)

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

### getTrailers

▸ **getTrailers**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/index.api.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Finds movies and trailers similar to a given trailer.

**`throws`** {RequiredError}

**`memberof`** TrailersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TrailersApiGetTrailersRequest`](../interfaces/generated_client.TrailersApiGetTrailersRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/index.api.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/trailers-api.ts:1256](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/trailers-api.ts#L1256)
