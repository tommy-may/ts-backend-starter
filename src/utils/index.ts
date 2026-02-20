import logger from '#/utils/log.util';

export const log = {
  error: (message: string, err: unknown) => {
    logger.error({ err }, message);
  },
  warn: <T extends object>(message: string, data: T | null = null) => {
    logger.warn({ data }, message);
  },
  info: <T extends object>(message: string, data: T | null = null) => {
    logger.info({ data }, message);
  },
  http: (message: string) => {
    logger.http(message);
  },
  debug: <T extends object>(message: string, data: T | null = null) => {
    logger.debug({ data }, message);
  },
};
