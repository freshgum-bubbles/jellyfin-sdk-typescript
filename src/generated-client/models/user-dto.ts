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


import { UserConfiguration } from './user-configuration';
import { UserPolicy } from './user-policy';

/**
 * Class UserDto.
 * @export
 * @interface UserDto
 */
export interface UserDto {
    /**
     * Gets or sets the name.
     * @type {string}
     * @memberof UserDto
     */
    Name?: string | null;
    /**
     * Gets or sets the server identifier.
     * @type {string}
     * @memberof UserDto
     */
    ServerId?: string | null;
    /**
     * Gets or sets the name of the server.  This is not used by the server and is for client-side usage only.
     * @type {string}
     * @memberof UserDto
     */
    ServerName?: string | null;
    /**
     * Gets or sets the id.
     * @type {string}
     * @memberof UserDto
     */
    Id?: string;
    /**
     * Gets or sets the primary image tag.
     * @type {string}
     * @memberof UserDto
     */
    PrimaryImageTag?: string | null;
    /**
     * Gets or sets a value indicating whether this instance has password.
     * @type {boolean}
     * @memberof UserDto
     */
    HasPassword?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has configured password.
     * @type {boolean}
     * @memberof UserDto
     */
    HasConfiguredPassword?: boolean;
    /**
     * Gets or sets a value indicating whether this instance has configured easy password.
     * @type {boolean}
     * @memberof UserDto
     */
    HasConfiguredEasyPassword?: boolean;
    /**
     * Gets or sets whether async login is enabled or not.
     * @type {boolean}
     * @memberof UserDto
     */
    EnableAutoLogin?: boolean | null;
    /**
     * Gets or sets the last login date.
     * @type {string}
     * @memberof UserDto
     */
    LastLoginDate?: string | null;
    /**
     * Gets or sets the last activity date.
     * @type {string}
     * @memberof UserDto
     */
    LastActivityDate?: string | null;
    /**
     * 
     * @type {UserConfiguration}
     * @memberof UserDto
     */
    Configuration?: UserConfiguration;
    /**
     * 
     * @type {UserPolicy}
     * @memberof UserDto
     */
    Policy?: UserPolicy;
    /**
     * Gets or sets the primary image aspect ratio.
     * @type {number}
     * @memberof UserDto
     */
    PrimaryImageAspectRatio?: number | null;
}


