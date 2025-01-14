[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / StudiosApi

# Class: StudiosApi

[generated-client](../modules/generated_client.md).StudiosApi

StudiosApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`StudiosApi`**

## Table of contents

### Constructors

- [constructor](generated_client.StudiosApi.md#constructor)

### Properties

- [axios](generated_client.StudiosApi.md#axios)
- [basePath](generated_client.StudiosApi.md#basepath)
- [configuration](generated_client.StudiosApi.md#configuration)

### Methods

- [getStudio](generated_client.StudiosApi.md#getstudio)
- [getStudios](generated_client.StudiosApi.md#getstudios)

## Constructors

### constructor

• **new StudiosApi**(`configuration?`, `basePath?`, `axios?`)

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

### getStudio

▸ **getStudio**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/index.api.BaseItemDto.md), `any`\>\>

**`summary`** Gets a studio by name.

**`throws`** {RequiredError}

**`memberof`** StudiosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`StudiosApiGetStudioRequest`](../interfaces/generated_client.StudiosApiGetStudioRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/index.api.BaseItemDto.md), `any`\>\>

#### Defined in

[generated-client/api/studios-api.ts:458](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/studios-api.ts#L458)

___

### getStudios

▸ **getStudios**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/index.api.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets all studios from a given item, folder, or the entire library.

**`throws`** {RequiredError}

**`memberof`** StudiosApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`StudiosApiGetStudiosRequest`](../interfaces/generated_client.StudiosApiGetStudiosRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/index.api.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/studios-api.ts:470](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/studios-api.ts#L470)
