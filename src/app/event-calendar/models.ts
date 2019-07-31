/**
 * An interface that describes the scheduled
 * event service provider
 */
export interface IScheduledEventService<TId> {
	/**
     * Returns a list of IScheduledEvent
     * @param year The year of the events
     * @param month The month of the events
     * @param day The day of the events
     */
	getScheduledEvents(
		year: number,
		month?: number | undefined,
		day?: number | undefined
	): IScheduledEvent<TId>[];
	/**
	 * Returns a single IScheduledEvent by id
	 * @param id The scheduled event id
	 */
	getScheduledEvent(id: TId): IScheduledEvent<TId>;
}
/**
 * An interface describing a scheduled event entity
 */
export interface IScheduledEvent<TId> {
	id: TId;
	dateTimeStamp: Date;
	type: ScheduledEventTypes;
}
/**
 * The types of scheduled events supported
 */
export enum ScheduledEventTypes {
	Breathing = 0,
	Meditation = 1
}
