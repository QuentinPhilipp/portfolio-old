import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  @Input() Content : string;
  @Input() Title : string;

  constructor() { }

  ngOnInit() {
    // this.Title = "Example";
    //
    // this.Content = "Habens semper restat cur lor primas est videbo. Cau novi dare meae cum mei voce sex. Mox cur pendeo hic operae fronte. Colligere nullamque ima eam membrorum levitatem conservat dum explorant. Existeret habituros societati evidenter suo magnitudo duo. Unitas rantem mo negans in captum de. Reddat in ex namque causis ac vi. Ac exsurgit loquendi at curantes excitari conversa. Timeo motus me arcte id. Putarim mutetur ubi sim vix angelos scripta rom calorem delusum. Humano ero habeam veluti ingens ope eae postea rom ignoro. Appellatur intelligam ab probabiles distinctas distribuam im ad. Percipiat rem laboriosa unaquaque imo iii opinionem ima delaberer. Lumen alium sum cui fuere sae. Originis co ac tractatu scilicet cognosci.Deo suspicio vos deinceps figmenta dumtaxat ulterius ens. Scripturis has uno quaerantur accidentia est eos. Ibi quo idea ergo otii dico dat quas fuit. Sap habetur ineptum has objecta fas. Dem indubitati distinguit diversorum lus imo. Est hic quae quos puto dare qua. Ut eo possimus insomnia me lectione actualis occurrit deceptor vi. Purgantur im ex fruebatur clausulas examinare finguntur re. Difficilia blandisque se mo ostenditur. Ac gi is ﻿tam nihilo partes.";
  }

}
