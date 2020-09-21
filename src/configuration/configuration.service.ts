import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigurationService {
    envConfig;
    constructor(filePath) {
        const file = (fs.existsSync(filePath)) ? filePath : '.env';
        this.envConfig = dotenv.parse(fs.readFileSync(file));
    }

    get(key) {
        return this.envConfig[key];
    }
}
