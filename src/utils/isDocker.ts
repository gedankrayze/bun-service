import {existsSync, readFileSync} from 'fs';

const isDocker = () =>
{
    try
    {
        const data = readFileSync('/proc/self/cgroup', 'utf8');
        return data.includes('docker') || data.includes('kubepods') || existsSync('/.dockerenv');
    }
    catch
    {
        return false;
    }
};

export default isDocker;
