import { getRandomInt} from '../utils/utils.js';
import { humanizeTaskDueDate, getDate } from '../utils/time-utils.js';
import { Price } from '../const.js';

const generateMockPoints = (type, destinationId, offersIds) => (
  {
    id: crypto.randomUUID(),
    basePrice: getRandomInt(Price.MIN, Price.MAX),
    dateFrom: humanizeTaskDueDate(getDate(false)),
    dateTo: humanizeTaskDueDate(getDate(true)),
    destination: destinationId,
    isFavorite: getRandomInt(0, 1),
    offers: offersIds,
    type
  }
);

export { generateMockPoints };
