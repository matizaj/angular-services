export class LoggingServices {
    logStatusChange(status: string) {
        console.log('A server status changed, next status: '+status);
    }
}