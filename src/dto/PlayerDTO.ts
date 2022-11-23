interface PlanetDTO {
    OwnerId: string;
    HQLevel: number;
}

export interface PlayerDTO {
	AllianceId: string;
	Avatar: string;
	Experience: number;
	Id: string;
	Level: number;
	Name: string;
	Online: boolean;
	Planets: PlanetDTO[];
}
