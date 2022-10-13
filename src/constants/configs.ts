interface ConfigsType {
  [key: string]: any;
}

const CONFIGS: ConfigsType = {
  TOKEN_COOKIE_NAME: 'BLACKBOX',
  OPERATION_IS_READY_COOKIE_NAME: 'OPERATION_READY',
  OPERATION_COMPLETED_COOKIE_NAME: 'OPERATION_COMPLETED',
  REQUEST_QUEUE_COOKIE_NAME: 'REQUEST_QUEUE',
};

export default CONFIGS;