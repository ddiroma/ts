import { TransLogTable } from './trans-log-table';
import { PerfLogTable } from './perf-log-table';
import { ChannelLogTable } from './channel-log-table';
import { StepLogTable } from './step-log-table';
import { MetricsLogTable } from './metrics-log-table';

export class Log {
  transLogTable: TransLogTable = new TransLogTable();
  perfLogTable: PerfLogTable = new PerfLogTable();
  channelLogTable: ChannelLogTable = new ChannelLogTable();
  stepLogTable: StepLogTable = new StepLogTable();
  metricsLogTable: MetricsLogTable = new MetricsLogTable();
}
