/**
 * Esta clase describe un usuario de la base de datos PRIMO.
 */
export class User {
    idUsuario:bigint;
    strUsuario:string;
    strPassword: string;
    intNumeroIntentos:bigint;
    bitActivo:boolean;
    intTipoUsuario:bigint;
}
