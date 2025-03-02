[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / EnvironmentApi

# Class: EnvironmentApi

[generated-client](../modules/generated_client.md).EnvironmentApi

EnvironmentApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`EnvironmentApi`**

## Table of contents

### Constructors

- [constructor](generated_client.EnvironmentApi.md#constructor)

### Properties

- [axios](generated_client.EnvironmentApi.md#axios)
- [basePath](generated_client.EnvironmentApi.md#basepath)
- [configuration](generated_client.EnvironmentApi.md#configuration)

### Methods

- [getDefaultDirectoryBrowser](generated_client.EnvironmentApi.md#getdefaultdirectorybrowser)
- [getDirectoryContents](generated_client.EnvironmentApi.md#getdirectorycontents)
- [getDrives](generated_client.EnvironmentApi.md#getdrives)
- [getNetworkShares](generated_client.EnvironmentApi.md#getnetworkshares)
- [getParentPath](generated_client.EnvironmentApi.md#getparentpath)
- [validatePath](generated_client.EnvironmentApi.md#validatepath)

## Constructors

### constructor

• **new EnvironmentApi**(`configuration?`, `basePath?`, `axios?`)

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

### getDefaultDirectoryBrowser

▸ **getDefaultDirectoryBrowser**(`options?`): `Promise`<`AxiosResponse`<[`DefaultDirectoryBrowserInfoDto`](../interfaces/index.api.DefaultDirectoryBrowserInfoDto.md), `any`\>\>

**`summary`** Get Default directory browser.

**`throws`** {RequiredError}

**`memberof`** EnvironmentApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`DefaultDirectoryBrowserInfoDto`](../interfaces/index.api.DefaultDirectoryBrowserInfoDto.md), `any`\>\>

#### Defined in

[generated-client/api/environment-api.ts:485](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/environment-api.ts#L485)

___

### getDirectoryContents

▸ **getDirectoryContents**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`FileSystemEntryInfo`](../interfaces/index.api.FileSystemEntryInfo.md)[], `any`\>\>

**`summary`** Gets the contents of a given directory in the file system.

**`throws`** {RequiredError}

**`memberof`** EnvironmentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`EnvironmentApiGetDirectoryContentsRequest`](../interfaces/generated_client.EnvironmentApiGetDirectoryContentsRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<[`FileSystemEntryInfo`](../interfaces/index.api.FileSystemEntryInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/environment-api.ts:497](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/environment-api.ts#L497)

___

### getDrives

▸ **getDrives**(`options?`): `Promise`<`AxiosResponse`<[`FileSystemEntryInfo`](../interfaces/index.api.FileSystemEntryInfo.md)[], `any`\>\>

**`summary`** Gets available drives from the server\'s file system.

**`throws`** {RequiredError}

**`memberof`** EnvironmentApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`FileSystemEntryInfo`](../interfaces/index.api.FileSystemEntryInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/environment-api.ts:508](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/environment-api.ts#L508)

___

### getNetworkShares

▸ **getNetworkShares**(`options?`): `Promise`<`AxiosResponse`<[`FileSystemEntryInfo`](../interfaces/index.api.FileSystemEntryInfo.md)[], `any`\>\>

**`summary`** Gets network paths.

**`deprecated`**

**`throws`** {RequiredError}

**`memberof`** EnvironmentApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<[`FileSystemEntryInfo`](../interfaces/index.api.FileSystemEntryInfo.md)[], `any`\>\>

#### Defined in

[generated-client/api/environment-api.ts:520](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/environment-api.ts#L520)

___

### getParentPath

▸ **getParentPath**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`string`, `any`\>\>

**`summary`** Gets the parent path of a given path.

**`throws`** {RequiredError}

**`memberof`** EnvironmentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`EnvironmentApiGetParentPathRequest`](../interfaces/generated_client.EnvironmentApiGetParentPathRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`, `any`\>\>

#### Defined in

[generated-client/api/environment-api.ts:532](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/environment-api.ts#L532)

___

### validatePath

▸ **validatePath**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<`void`, `any`\>\>

**`summary`** Validates path.

**`throws`** {RequiredError}

**`memberof`** EnvironmentApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`EnvironmentApiValidatePathRequest`](../interfaces/generated_client.EnvironmentApiValidatePathRequest.md) | Request parameters. |
| `options?` | `any` | - |

#### Returns

`Promise`<`AxiosResponse`<`void`, `any`\>\>

#### Defined in

[generated-client/api/environment-api.ts:544](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/environment-api.ts#L544)
