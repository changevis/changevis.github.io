"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[8401],{78401:function(e,t,i){i.r(t),i.d(t,{Adapter:function(){return b},CodeActionAdaptor:function(){return K},DefinitionAdapter:function(){return C},DiagnosticsAdapter:function(){return y},FormatAdapter:function(){return O},FormatHelper:function(){return P},FormatOnTypeAdapter:function(){return N},InlayHintsAdapter:function(){return R},Kind:function(){return F},LibFiles:function(){return _},OccurrencesAdapter:function(){return v},OutlineAdapter:function(){return D},QuickInfoAdapter:function(){return x},ReferenceAdapter:function(){return A},RenameAdapter:function(){return M},SignatureHelpAdapter:function(){return k},SuggestAdapter:function(){return w},WorkerManager:function(){return p},flattenDiagnosticMessageText:function(){return f},getJavaScriptWorker:function(){return V},getTypeScriptWorker:function(){return W},setupJavaScript:function(){return H},setupTypeScript:function(){return E}});var s=i(32363),n=i(39585),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,c=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t,i,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let n of o(t))l.call(e,n)||!i&&"default"===n||r(e,n,{get:()=>t[n],enumerable:!(s=a(t,n))||s.enumerable});return e},d=(e,t,i)=>(c(e,"symbol"!==typeof t?t+"":t,i),i),g={};u(g,s);var p=class{_modeId;_defaults;_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){if(!this._client){this._worker=g.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});let e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then((e=>this._worker?this._worker.withSyncedResources(g.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):e))),this._client=e}return this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}},m={};function f(e,t,i=0){if("string"===typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const n of e.next)s+=f(n,t,i);return s}function h(e){return e?e.map((e=>e.text)).join(""):""}m["lib.d.ts"]=!0,m["lib.dom.d.ts"]=!0,m["lib.dom.iterable.d.ts"]=!0,m["lib.es2015.collection.d.ts"]=!0,m["lib.es2015.core.d.ts"]=!0,m["lib.es2015.d.ts"]=!0,m["lib.es2015.generator.d.ts"]=!0,m["lib.es2015.iterable.d.ts"]=!0,m["lib.es2015.promise.d.ts"]=!0,m["lib.es2015.proxy.d.ts"]=!0,m["lib.es2015.reflect.d.ts"]=!0,m["lib.es2015.symbol.d.ts"]=!0,m["lib.es2015.symbol.wellknown.d.ts"]=!0,m["lib.es2016.array.include.d.ts"]=!0,m["lib.es2016.d.ts"]=!0,m["lib.es2016.full.d.ts"]=!0,m["lib.es2017.d.ts"]=!0,m["lib.es2017.full.d.ts"]=!0,m["lib.es2017.intl.d.ts"]=!0,m["lib.es2017.object.d.ts"]=!0,m["lib.es2017.sharedmemory.d.ts"]=!0,m["lib.es2017.string.d.ts"]=!0,m["lib.es2017.typedarrays.d.ts"]=!0,m["lib.es2018.asyncgenerator.d.ts"]=!0,m["lib.es2018.asynciterable.d.ts"]=!0,m["lib.es2018.d.ts"]=!0,m["lib.es2018.full.d.ts"]=!0,m["lib.es2018.intl.d.ts"]=!0,m["lib.es2018.promise.d.ts"]=!0,m["lib.es2018.regexp.d.ts"]=!0,m["lib.es2019.array.d.ts"]=!0,m["lib.es2019.d.ts"]=!0,m["lib.es2019.full.d.ts"]=!0,m["lib.es2019.object.d.ts"]=!0,m["lib.es2019.string.d.ts"]=!0,m["lib.es2019.symbol.d.ts"]=!0,m["lib.es2020.bigint.d.ts"]=!0,m["lib.es2020.d.ts"]=!0,m["lib.es2020.full.d.ts"]=!0,m["lib.es2020.intl.d.ts"]=!0,m["lib.es2020.promise.d.ts"]=!0,m["lib.es2020.sharedmemory.d.ts"]=!0,m["lib.es2020.string.d.ts"]=!0,m["lib.es2020.symbol.wellknown.d.ts"]=!0,m["lib.es2021.d.ts"]=!0,m["lib.es2021.full.d.ts"]=!0,m["lib.es2021.intl.d.ts"]=!0,m["lib.es2021.promise.d.ts"]=!0,m["lib.es2021.string.d.ts"]=!0,m["lib.es2021.weakref.d.ts"]=!0,m["lib.es5.d.ts"]=!0,m["lib.es6.d.ts"]=!0,m["lib.esnext.d.ts"]=!0,m["lib.esnext.full.d.ts"]=!0,m["lib.esnext.intl.d.ts"]=!0,m["lib.esnext.promise.d.ts"]=!0,m["lib.esnext.string.d.ts"]=!0,m["lib.esnext.weakref.d.ts"]=!0,m["lib.scripthost.d.ts"]=!0,m["lib.webworker.d.ts"]=!0,m["lib.webworker.importscripts.d.ts"]=!0,m["lib.webworker.iterable.d.ts"]=!0;var b=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:n,column:r}=i,{lineNumber:a,column:o}=s;return{startLineNumber:n,startColumn:r,endLineNumber:a,endColumn:o}}},_=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!m[e.path.slice(1)])}getOrCreateModel(e){const t=g.Uri.parse(e),i=g.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return g.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const s=n.TG.getExtraLibs()[e];return s?g.editor.createModel(s.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},y=class extends b{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i;const n=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const n=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),r=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():g.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){n.dispose(),r.dispose(),clearTimeout(s)}},t()},r=e=>{g.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(g.editor.onDidCreateModel((e=>n(e)))),this._disposables.push(g.editor.onWillDisposeModel(r)),this._disposables.push(g.editor.onDidChangeModelLanguage((e=>{r(e.model),n(e.model)}))),this._disposables.push({dispose(){for(const e of g.editor.getModels())r(e)}});const a=()=>{for(const e of g.editor.getModels())r(e),n(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),g.editor.getModels().forEach((e=>n(e)))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:n,noSuggestionDiagnostics:r}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),n||i.push(t.getSemanticDiagnostics(e.uri.toString())),r||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const a=await Promise.all(i);if(!a||e.isDisposed())return;const o=a.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),l=o.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?g.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||g.editor.setModelMarkers(e,this._selector,o.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:n,column:r}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(g.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(g.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:n,startColumn:r,endLineNumber:a,endColumn:o,message:f(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const n=t.start||0,r=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(n),{lineNumber:l,column:c}=s.getPositionAt(n+r);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:c,message:f(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return g.MarkerSeverity.Error;case 3:return g.MarkerSeverity.Info;case 0:return g.MarkerSeverity.Warning;case 2:return g.MarkerSeverity.Hint}return g.MarkerSeverity.Info}},w=class extends b{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,s){const n=e.getWordUntilPosition(t),r=new g.Range(t.lineNumber,n.startColumn,t.lineNumber,n.endColumn),a=e.uri,o=e.getOffsetAt(t),l=await this._worker(a);if(e.isDisposed())return;const c=await l.getCompletionsAtPosition(a.toString(),o);if(!c||e.isDisposed())return;const u=c.entries.map((i=>{let s=r;if(i.replacementSpan){const t=e.getPositionAt(i.replacementSpan.start),n=e.getPositionAt(i.replacementSpan.start+i.replacementSpan.length);s=new g.Range(t.lineNumber,t.column,n.lineNumber,n.column)}const n=[];return-1!==i.kindModifiers?.indexOf("deprecated")&&n.push(g.languages.CompletionItemTag.Deprecated),{uri:a,position:t,offset:o,range:s,label:i.name,insertText:i.name,sortText:i.sortText,kind:w.convertKind(i.kind),tags:n}}));return{suggestions:u}}async resolveCompletionItem(e,t){const i=e,s=i.uri,n=i.position,r=i.offset,a=await this._worker(s),o=await a.getCompletionEntryDetails(s.toString(),r,i.label);return o?{uri:s,position:n,label:o.name,kind:w.convertKind(o.kind),detail:h(o.displayParts),documentation:{value:w.createDocumentationString(o)}}:i}static convertKind(e){switch(e){case F.primitiveType:case F.keyword:return g.languages.CompletionItemKind.Keyword;case F.variable:case F.localVariable:return g.languages.CompletionItemKind.Variable;case F.memberVariable:case F.memberGetAccessor:case F.memberSetAccessor:return g.languages.CompletionItemKind.Field;case F.function:case F.memberFunction:case F.constructSignature:case F.callSignature:case F.indexSignature:return g.languages.CompletionItemKind.Function;case F.enum:return g.languages.CompletionItemKind.Enum;case F.module:return g.languages.CompletionItemKind.Module;case F.class:return g.languages.CompletionItemKind.Class;case F.interface:return g.languages.CompletionItemKind.Interface;case F.warning:return g.languages.CompletionItemKind.File}return g.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=h(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${S(i)}`;return t}};function S(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var k=class extends b{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case g.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case g.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case g.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,s){const n=e.uri,r=e.getOffsetAt(t),a=await this._worker(n);if(e.isDisposed())return;const o=await a.getSignatureHelpItems(n.toString(),r,{triggerReason:k._toSignatureHelpTriggerReason(s)});if(!o||e.isDisposed())return;const l={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]};return o.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:h(e.documentation)},t.label+=h(e.prefixDisplayParts),e.parameters.forEach(((i,s,n)=>{const r=h(i.displayParts),a={label:r,documentation:{value:h(i.documentation)}};t.label+=r,t.parameters.push(a),s<n.length-1&&(t.label+=h(e.separatorDisplayParts))})),t.label+=h(e.suffixDisplayParts),l.signatures.push(t)})),{value:l,dispose(){}}}},x=class extends b{async provideHover(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getQuickInfoAtPosition(s.toString(),n);if(!a||e.isDisposed())return;const o=h(a.documentation),l=a.tags?a.tags.map((e=>S(e))).join("  \n\n"):"",c=h(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},v=class extends b{async provideDocumentHighlights(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getOccurrencesAtPosition(s.toString(),n);return a&&!e.isDisposed()?a.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?g.languages.DocumentHighlightKind.Write:g.languages.DocumentHighlightKind.Text}))):void 0}},C=class extends b{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,n=e.getOffsetAt(t),r=await this._worker(s);if(e.isDisposed())return;const a=await r.getDefinitionAtPosition(s.toString(),n);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>g.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let l of a){const e=this._libFiles.getOrCreateModel(l.fileName);e&&o.push({uri:e.uri,range:this._textSpanToRange(e,l.textSpan)})}return o}},A=class extends b{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const n=e.uri,r=e.getOffsetAt(t),a=await this._worker(n);if(e.isDisposed())return;const o=await a.getReferencesAtPosition(n.toString(),r);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>g.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let c of o){const e=this._libFiles.getOrCreateModel(c.fileName);e&&l.push({uri:e.uri,range:this._textSpanToRange(e,c.textSpan)})}return l}},D=class extends b{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const n=await s.getNavigationBarItems(i.toString());if(!n||e.isDisposed())return;const r=(t,i,s)=>{let n={name:i.text,detail:"",kind:I[i.kind]||g.languages.SymbolKind.Variable,range:this._textSpanToRange(e,i.spans[0]),selectionRange:this._textSpanToRange(e,i.spans[0]),tags:[]};if(s&&(n.containerName=s),i.childItems&&i.childItems.length>0)for(let e of i.childItems)r(t,e,n.name);t.push(n)};let a=[];return n.forEach((e=>r(a,e))),a}},F=class{};d(F,"unknown",""),d(F,"keyword","keyword"),d(F,"script","script"),d(F,"module","module"),d(F,"class","class"),d(F,"interface","interface"),d(F,"type","type"),d(F,"enum","enum"),d(F,"variable","var"),d(F,"localVariable","local var"),d(F,"function","function"),d(F,"localFunction","local function"),d(F,"memberFunction","method"),d(F,"memberGetAccessor","getter"),d(F,"memberSetAccessor","setter"),d(F,"memberVariable","property"),d(F,"constructorImplementation","constructor"),d(F,"callSignature","call"),d(F,"indexSignature","index"),d(F,"constructSignature","construct"),d(F,"parameter","parameter"),d(F,"typeParameter","type parameter"),d(F,"primitiveType","primitive type"),d(F,"label","label"),d(F,"alias","alias"),d(F,"const","const"),d(F,"let","let"),d(F,"warning","warning");var I=Object.create(null);I[F.module]=g.languages.SymbolKind.Module,I[F.class]=g.languages.SymbolKind.Class,I[F.enum]=g.languages.SymbolKind.Enum,I[F.interface]=g.languages.SymbolKind.Interface,I[F.memberFunction]=g.languages.SymbolKind.Method,I[F.memberVariable]=g.languages.SymbolKind.Property,I[F.memberGetAccessor]=g.languages.SymbolKind.Property,I[F.memberSetAccessor]=g.languages.SymbolKind.Property,I[F.variable]=g.languages.SymbolKind.Variable,I[F.const]=g.languages.SymbolKind.Variable,I[F.localVariable]=g.languages.SymbolKind.Variable,I[F.variable]=g.languages.SymbolKind.Variable,I[F.function]=g.languages.SymbolKind.Function,I[F.localFunction]=g.languages.SymbolKind.Function;var T,L,P=class extends b{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},O=class extends P{async provideDocumentRangeFormattingEdits(e,t,i,s){const n=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(n.toString(),r,a,P._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},N=class extends P{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,n){const r=e.uri,a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(r.toString(),a,i,P._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},K=class extends P{async provideCodeActions(e,t,i,s){const n=e.uri,r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=P._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(n);if(e.isDisposed())return;const u=await c.getCodeFixesAtPosition(n.toString(),r,a,l,o);if(!u||e.isDisposed())return{actions:[],dispose:()=>{}};const d=u.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t)));return{actions:d,dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const r of i.changes)for(const t of r.textChanges)s.push({resource:e.uri,edit:{range:this._textSpanToRange(e,t.span),text:t.newText}});const n={title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"};return n}},M=class extends b{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const n=e.uri,r=n.toString(),a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getRenameInfo(r,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(r,a,!1,!1,!1);if(!c||e.isDisposed())return;const u=[];for(const d of c){const e=this._libFiles.getOrCreateModel(d.fileName);if(!e)throw new Error(`Unknown file ${d.fileName}.`);u.push({resource:e.uri,edit:{range:this._textSpanToRange(e,d.textSpan),text:i}})}return{edits:u}}},R=class extends b{async provideInlayHints(e,t,i){const s=e.uri,n=s.toString(),r=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);if(e.isDisposed())return null;const l=await o.provideInlayHints(n,r,a),c=l.map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)})));return{hints:c,dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return g.languages.InlayHintKind.Parameter;case"Type":return g.languages.InlayHintKind.Type;default:return g.languages.InlayHintKind.Type}}};function E(e){L=j(e,"typescript")}function H(e){T=j(e,"javascript")}function V(){return new Promise(((e,t)=>{if(!T)return t("JavaScript not registered!");e(T)}))}function W(){return new Promise(((e,t)=>{if(!L)return t("TypeScript not registered!");e(L)}))}function j(e,t){const i=new p(t,e),s=(...e)=>i.getLanguageServiceWorker(...e),n=new _(s);return g.languages.registerCompletionItemProvider(t,new w(s)),g.languages.registerSignatureHelpProvider(t,new k(s)),g.languages.registerHoverProvider(t,new x(s)),g.languages.registerDocumentHighlightProvider(t,new v(s)),g.languages.registerDefinitionProvider(t,new C(n,s)),g.languages.registerReferenceProvider(t,new A(n,s)),g.languages.registerDocumentSymbolProvider(t,new D(s)),g.languages.registerDocumentRangeFormattingEditProvider(t,new O(s)),g.languages.registerOnTypeFormattingEditProvider(t,new N(s)),g.languages.registerCodeActionProvider(t,new K(s)),g.languages.registerRenameProvider(t,new M(n,s)),g.languages.registerInlayHintsProvider(t,new R(s)),new y(n,e,t,s),s}}}]);
//# sourceMappingURL=8401-legacy.d33b77bc.js.map