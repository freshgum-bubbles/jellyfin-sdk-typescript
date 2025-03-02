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



/**
 * Class UtcTimeResponse.
 * @export
 * @interface UtcTimeResponse
 */
export interface UtcTimeResponse {
    /**
     * Gets the UTC time when request has been received.
     * @type {string}
     * @memberof UtcTimeResponse
     */
    RequestReceptionTime?: string;
    /**
     * Gets the UTC time when response has been sent.
     * @type {string}
     * @memberof UtcTimeResponse
     */
    ResponseTransmissionTime?: string;
}


