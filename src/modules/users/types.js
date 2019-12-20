/**
 * @typedef User
 * @property {integer} id
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {Address.model} address
 * @property {string} phone
 * @property {string} website
 * @property {Company.model} company
 */

/**
  * @typedef Address
  * @property {string} street
  * @property {string} suite
  * @property {string} city
  * @property {string} zipcode
  * @property {Geo.model} geo
  */

/**
 * @typedef Company
 * @property {string} name
 * @property {string} catchPhrase
 * @property {string} bs
 */

/**
  * @typedef Geo
  * @property {string} lat
  * @property {string} lng
  */
