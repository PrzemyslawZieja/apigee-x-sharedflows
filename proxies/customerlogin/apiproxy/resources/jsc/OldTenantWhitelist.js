var oldTenantList = [
    "acrmain",
    "andidemo",
    "andidemo2",
    "arnau",
    "avatria",
    "bala",
    "celonisdemo",
    "clausen",
    "contentful",
    "darkstudio",
    "dcom",
    "demolieferladen",
    "divae",
    "dua",
    "ecube",
    "ecube000",
    "api2stage",
    "ecubedemo",
    "emakina2022",
    "emkplayground",
    "ernstingsfamily",
    "foo",
    "grocerscloud",
    "hungrily",
    "hussam",
    "icecattest",
    "indrit302",
    "kci",
    "kmucha",
    "kmucha555",
    "kmuchaokta",
    "lb1edekamull",
    "llab",
    "lls2",
    "lokalgr",
    "lsrundeck",
    "magda",
    "makaira",
    "malamute",
    "marmalade",
    "matthewdemo",
    "mdteststefan",
    "mirko",
    "mpreis",
    "mpreisdev",
    "muward",
    "muwardtradingco",
    "mytesttenant",
    "n11showcase",
    "naturgutgmbh2",
    "neteleven",
    "nicolas",
    "nicolas1",
    "novatest",
    "regioluzzer",
    "saasdemo",
    "smartcommerce",
    "struve",
    "tmehdi",
    "acrdvstage",
    "acrqastage",
    "alexostage",
    "alexteststage",
    "amyszkierstage",
    "andidemostage",
    "apistage",
    "b2bcheckstage",
    "boteststage",
    "casagoteststage",
    "catalogtststage",
    "cottonitstage",
    "cxpautostage",
    "digitelstage",
    "eduardstage",
    "efdemostage",
    "emakina001stage",
    "ensargroupstage",
    "helehif787stage",
    "icecatdemostage",
    "icecatstage",
    "icecatstgstage",
    "indritstage",
    "kotip68568stage",
    "lsrundeckstage",
    "lssitesstage",
    "lstypkastage",
    "mdecteststage",
    "mpreisit",
    "mpreistest",
    "n11showstage",
    "oddity",
    "orystage",
    "pawelteststage",
    "postmanstage",
    "rodrigostage",
    "saastest2",
    "saasdev2",
    "stefanteststage",
    "struvestage",
    "tmehdistage"
    ]
    
context.setVariable("SessionContext.oldTenantWrongRequest", false);
context.setVariable("SessionContext.tenantWrongRequest", false);
var requestTenant = context.getVariable("tenant");
var isOldTenant = (oldTenantList.indexOf(requestTenant) > -1)
var isNewTenant = (oldTenantList.indexOf(requestTenant) === -1)
var session_id = context.getVariable("SessionContext.sessionId");
var isSessionIdProvided = (session_id !== null)
var isSessionIdNotProvided = (session_id === null)

context.setVariable("SessionContext.path", "anonymous");

if (isOldTenant && isSessionIdProvided){
    context.setVariable("SessionContext.path", "anonymous/" + session_id);
}
if (isNewTenant && isSessionIdProvided){
    context.setVariable("SessionContext.tenantWrongRequest", true);
}