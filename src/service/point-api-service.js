import ApiService from '../framework/api-service' ;

import { Method } from '../const.js';

export default class PointApiService extends ApiService {
  getDestinations() {
    return this._load({url: 'destinations'})
      .then(ApiService.parseResponse);
  }

  getOffers() {
    return this._load({url: 'offers'})
      .then(ApiService.parseResponse);
  }

  getPoints() {
    return this._load({url: 'points'})
      .then(ApiService.parseResponse);
  }

  async updatePoint(update) {
    const response = await this._load({
      url: `points/${update.id}`,
      method: Method.PUT,
      body: JSON.stringify(update),
      headers: new Headers({'Content-Type': 'application/json'})
    });

    return ApiService.parseResponse(response);
  }

  async addPoint(point) {
    const response = await this._load({
      url: 'points',
      method: Method.POST,
      body: JSON.stringify(point),
      headers: new Headers({'Content-Type': 'application/json'})
    });

    return ApiService.parseResponse(response);
  }

  async deletePoint(point) {
    await this._load({
      url: `points/${point.id}`,
      method: Method.DELETE
    });
  }
}
