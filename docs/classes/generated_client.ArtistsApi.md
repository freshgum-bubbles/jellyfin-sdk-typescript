[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ArtistsApi

# Class: ArtistsApi

[generated-client](../modules/generated_client.md).ArtistsApi

ArtistsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`ArtistsApi`**

## Table of contents

### Constructors

- [constructor](generated_client.ArtistsApi.md#constructor)

### Properties

- [axios](generated_client.ArtistsApi.md#axios)
- [basePath](generated_client.ArtistsApi.md#basepath)
- [configuration](generated_client.ArtistsApi.md#configuration)

### Methods

- [getAlbumArtists](generated_client.ArtistsApi.md#getalbumartists)
- [getArtistByName](generated_client.ArtistsApi.md#getartistbyname)
- [getArtists](generated_client.ArtistsApi.md#getartists)

## Constructors

### constructor

• **new ArtistsApi**(`configuration?`, `basePath?`, `axios?`)

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

### getAlbumArtists

▸ **getAlbumArtists**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/index.api.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets all album artists from a given item, folder, or the entire library.

**`throws`** {RequiredError}

**`memberof`** ArtistsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ArtistsApiGetAlbumArtistsRequest`](../interfaces/generated_client.ArtistsApiGetAlbumArtistsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/index.api.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/artists-api.ts:1121](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/artists-api.ts#L1121)

___

### getArtistByName

▸ **getArtistByName**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/index.api.BaseItemDto.md), `any`\>\>

**`summary`** Gets an artist by name.

**`throws`** {RequiredError}

**`memberof`** ArtistsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ArtistsApiGetArtistByNameRequest`](../interfaces/generated_client.ArtistsApiGetArtistByNameRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDto`](../interfaces/index.api.BaseItemDto.md), `any`\>\>

#### Defined in

[generated-client/api/artists-api.ts:1133](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/artists-api.ts#L1133)

___

### getArtists

▸ **getArtists**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/index.api.BaseItemDtoQueryResult.md), `any`\>\>

**`summary`** Gets all artists from a given item, folder, or the entire library.

**`throws`** {RequiredError}

**`memberof`** ArtistsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ArtistsApiGetArtistsRequest`](../interfaces/generated_client.ArtistsApiGetArtistsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`BaseItemDtoQueryResult`](../interfaces/index.api.BaseItemDtoQueryResult.md), `any`\>\>

#### Defined in

[generated-client/api/artists-api.ts:1145](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/artists-api.ts#L1145)
