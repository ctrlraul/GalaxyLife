import { URL } from 'node:url';
import fetch from 'node-fetch';
import { PlayerDTO } from './dto/PlayerDTO';
import { ServerStatusDTO } from './dto/ServerStatusDTO';
import { PlayerStatsDTO } from './dto/PlayerStatsDTO';
import { AllianceDTO } from './dto/AllianceDTO';


const BASE_URL = 'https://api.galaxylifegame.net';


async function get(path: string): Promise<any> {

    const url = new URL(path, BASE_URL);
    const response = await fetch(url);
    const rawData = await response.text();

    /* The API doesn't respond with actual errors. When it succeeds
     * it sends json, when it fails it sends an error message as text
     * and content is noted as plain text regardless. ¯\_(ツ)_/¯
     */

    try {
        return JSON.parse(rawData);
    } catch(_) {
        throw new Error(rawData);
    }

}

export const getPlayer = (id: string): Promise<PlayerDTO> => get(`users/get?id=${id}`);
export const getPlayerForName = (name: string): Promise<PlayerDTO> => get(`users/name?name=${name}`);
export const getPlayerStats = (id: string): Promise<PlayerStatsDTO> => get(`users/stats?id=${id}`);
export const getAlliance = (name: string): Promise<AllianceDTO> => get(`alliances/get?name=${name}`);
export const getServerStatus = (): Promise<ServerStatusDTO> => get(`status`);
