import ClassRoom from './0-classroom';

/**
 * Create array of {@link ClassRoom}s with a specific size
 * @return array of {@link ClassRoom}
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
