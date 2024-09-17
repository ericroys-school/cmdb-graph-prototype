import { root } from './root.js';
import { application } from './software/application.js';
import { computer } from './devices/computer.js';
import { person } from './organization/person.js';
import { device } from './devices/device.js';
import { ip } from './connection/ip.js';
import { component } from './components/component.js';
import { cpu } from './components/cpu.js';
import { storage } from './components/storage.js';
import { software } from './software/software.js';
import { memory } from './components/memory.js';
import { os } from './software/os.js';
import { location } from './locations/location.js';
import { dbinstance } from './software/dbinstance.js';
import { product } from './software/product.js';
import { company } from './organization/company.js';
import { organization } from './organization/organization.js';
import { department } from './organization/department.js';
import { enums } from './enums.js';

export const typeDefArray = [
  root,
  device,
  computer,
  ip,
  application,
  person,
  component,
  cpu,
  storage,
  software,
  product,
  memory,
  os,
  dbinstance,
  location,
  company,
  organization,
  department,
  enums,
];
