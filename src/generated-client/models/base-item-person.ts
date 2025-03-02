/* tslint:disable */
/* eslint-disable */
/**
 * Jellyfin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 10.7.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BaseItemPersonImageBlurHashes } from './base-item-person-image-blur-hashes';

/**
 * This is used by the api to get information about a Person within a BaseItem.
 * @export
 * @interface BaseItemPerson
 */
export interface BaseItemPerson {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof BaseItemPerson
     */
    Name?: string | null;
    /**
     * Gets or sets the identifier.
     * @type {string}
     * @memberof BaseItemPerson
     */
    Id?: string | null;
    /**
     * Gets or sets the role.
     * @type {string}
     * @memberof BaseItemPerson
     */
    Role?: string | null;
    /**
     * Gets or sets the type.
     * @type {string}
     * @memberof BaseItemPerson
     */
    Type?: string | null;
    /**
     * Gets or sets the primary image tag.
     * @type {string}
     * @memberof BaseItemPerson
     */
    PrimaryImageTag?: string | null;
    /**
     * 
     * @type {BaseItemPersonImageBlurHashes}
     * @memberof BaseItemPerson
     */
    ImageBlurHashes?: BaseItemPersonImageBlurHashes | null;
}


