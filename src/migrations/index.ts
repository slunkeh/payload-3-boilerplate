import * as migration_20241125_222020_initial from './20241125_222020_initial';
import * as migration_20250130_220413_new_text_field from './20250130_220413_new_text_field';

export const migrations = [
  {
    up: migration_20241125_222020_initial.up,
    down: migration_20241125_222020_initial.down,
    name: '20241125_222020_initial',
  },
  {
    up: migration_20250130_220413_new_text_field.up,
    down: migration_20250130_220413_new_text_field.down,
    name: '20250130_220413_new_text_field'
  },
];
