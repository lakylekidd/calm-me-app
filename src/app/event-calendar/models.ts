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
	/**
	 * Creates a new scheduled event entity
	 * @param entity The scheduled event entity to store
	 */
	create(entity: IScheduledEvent<TId>): IScheduledEvent<TId>;
	/**
	 * Deletes a scheduled event entity from the store
	 * @param id The id of the scheduled event entity
	 */
	delete(id: TId);
}
/**
 * An interface that describes a single day
 * on the calendar
 */
export interface ICalDay {
	index: number;
	date: Date;
	scheduledEvents: IScheduledEvent<unknown>[];
}
/**
 * An interface describing a scheduled event entity
 */
export interface IScheduledEvent<TId extends number | unknown> {
	id?: TId;
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
/**
 * Enum that defines all the day of the week
 */
export enum DayOfWeek {
	MON,
	TUE,
	WED,
	THU,
	FRI,
	SAT,
	SUN
}
/**
 * Interface that describes the configuration of the module
 */
export interface IConfig {
	startingWeekDay: DayOfWeek;
}
/**
 * The default configurations of the module
 */
export const CAL_CONFIG: IConfig = {
	startingWeekDay: DayOfWeek.MON
};
