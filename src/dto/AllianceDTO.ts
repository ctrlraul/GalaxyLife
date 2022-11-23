interface AllianceMemberDTO {
    Id: string;
    Name: string;
    Avatar: string;
    AllianceRole: number;
    TotalWarPoints: number;
}

export interface AllianceDTO {
    Id: string;
    Name: string;
    Description: string;
    Emblem: {
        Shape: number;
        Pattern: number;
        Icon: number;
    }
    AllianceLevel: number;
    WarPoints: number;
    WarsWon: number;
    WarsLost: number;
    Members: AllianceMemberDTO[];
}
