import Scrivito from 'scrivito'

Scrivito.configure({
  tenant: "11215e19da5de47023db5c142893e6fd",
  origin: "https://happy-loquat-scrivito-0324.scrivito.net",
})

Scrivito.provideObjClass('Homepage', {})
Scrivito.provideObjClass('Page', {})

console.log("Loading root...");
const root = await Scrivito.load(() => Scrivito.Obj.onSite("default").root())

console.log("Found root", root?.id());
