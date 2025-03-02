[@thornbill/jellyfin-sdk](../README.md) / [Modules](../modules.md) / [generated-client](../modules/generated_client.md) / ImageApiHeadPersonImageByIndexRequest

# Interface: ImageApiHeadPersonImageByIndexRequest

[generated-client](../modules/generated_client.md).ImageApiHeadPersonImageByIndexRequest

Request parameters for headPersonImageByIndex operation in ImageApi.

**`export`**

**`interface`** ImageApiHeadPersonImageByIndexRequest

## Table of contents

### Properties

- [addPlayedIndicator](generated_client.ImageApiHeadPersonImageByIndexRequest.md#addplayedindicator)
- [backgroundColor](generated_client.ImageApiHeadPersonImageByIndexRequest.md#backgroundcolor)
- [blur](generated_client.ImageApiHeadPersonImageByIndexRequest.md#blur)
- [cropWhitespace](generated_client.ImageApiHeadPersonImageByIndexRequest.md#cropwhitespace)
- [fillHeight](generated_client.ImageApiHeadPersonImageByIndexRequest.md#fillheight)
- [fillWidth](generated_client.ImageApiHeadPersonImageByIndexRequest.md#fillwidth)
- [foregroundLayer](generated_client.ImageApiHeadPersonImageByIndexRequest.md#foregroundlayer)
- [format](generated_client.ImageApiHeadPersonImageByIndexRequest.md#format)
- [height](generated_client.ImageApiHeadPersonImageByIndexRequest.md#height)
- [imageIndex](generated_client.ImageApiHeadPersonImageByIndexRequest.md#imageindex)
- [imageType](generated_client.ImageApiHeadPersonImageByIndexRequest.md#imagetype)
- [maxHeight](generated_client.ImageApiHeadPersonImageByIndexRequest.md#maxheight)
- [maxWidth](generated_client.ImageApiHeadPersonImageByIndexRequest.md#maxwidth)
- [name](generated_client.ImageApiHeadPersonImageByIndexRequest.md#name)
- [percentPlayed](generated_client.ImageApiHeadPersonImageByIndexRequest.md#percentplayed)
- [quality](generated_client.ImageApiHeadPersonImageByIndexRequest.md#quality)
- [tag](generated_client.ImageApiHeadPersonImageByIndexRequest.md#tag)
- [unplayedCount](generated_client.ImageApiHeadPersonImageByIndexRequest.md#unplayedcount)
- [width](generated_client.ImageApiHeadPersonImageByIndexRequest.md#width)

## Properties

### addPlayedIndicator

• `Optional` `Readonly` **addPlayedIndicator**: `boolean`

Optional. Add a played indicator.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9252](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9252)

___

### backgroundColor

• `Optional` `Readonly` **backgroundColor**: `string`

Optional. Apply a background color for transparent images.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9266](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9266)

___

### blur

• `Optional` `Readonly` **blur**: `number`

Optional. Blur image.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9259](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9259)

___

### cropWhitespace

• `Optional` `Readonly` **cropWhitespace**: `boolean`

Optional. Specify if whitespace should be cropped out of the image. True/False. If unspecified, whitespace will be cropped from logos and clear art.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9245](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9245)

___

### fillHeight

• `Optional` `Readonly` **fillHeight**: `number`

Height of box to fill.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9238](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9238)

___

### fillWidth

• `Optional` `Readonly` **fillWidth**: `number`

Width of box to fill.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9231](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9231)

___

### foregroundLayer

• `Optional` `Readonly` **foregroundLayer**: `string`

Optional. Apply a foreground layer on top of the image.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9273](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9273)

___

### format

• `Optional` `Readonly` **format**: [`ImageFormat`](../enums/index.api.ImageFormat.md)

Determines the output format of the image - original,gif,jpg,png.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9175](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9175)

___

### height

• `Optional` `Readonly` **height**: `number`

The fixed image height to return.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9217](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9217)

___

### imageIndex

• `Readonly` **imageIndex**: `number`

Image index.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9161](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9161)

___

### imageType

• `Readonly` **imageType**: [`ImageType`](../enums/index.api.ImageType.md)

Image type.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9154](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9154)

___

### maxHeight

• `Optional` `Readonly` **maxHeight**: `number`

The maximum image height to return.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9189](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9189)

___

### maxWidth

• `Optional` `Readonly` **maxWidth**: `number`

The maximum image width to return.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9182](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9182)

___

### name

• `Readonly` **name**: `string`

Person name.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9147](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9147)

___

### percentPlayed

• `Optional` `Readonly` **percentPlayed**: `number`

Optional. Percent to render for the percent played overlay.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9196](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9196)

___

### quality

• `Optional` `Readonly` **quality**: `number`

Optional. Quality setting, from 0-100. Defaults to 90 and should suffice in most cases.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9224](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9224)

___

### tag

• `Optional` `Readonly` **tag**: `string`

Optional. Supply the cache tag from the item object to receive strong caching headers.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9168](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9168)

___

### unplayedCount

• `Optional` `Readonly` **unplayedCount**: `number`

Optional. Unplayed count overlay to render.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9203](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9203)

___

### width

• `Optional` `Readonly` **width**: `number`

The fixed image width to return.

**`memberof`** ImageApiHeadPersonImageByIndex

#### Defined in

[generated-client/api/image-api.ts:9210](https://github.com/thornbill/jellyfin-sdk-typescript/blob/eb13db7/src/generated-client/api/image-api.ts#L9210)
