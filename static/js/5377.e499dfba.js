"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[5377],{17722:function(e,t,n){n.r(t),n.d(t,{CompletionAdapter:function(){return ye},DefinitionAdapter:function(){return je},DiagnosticsAdapter:function(){return we},DocumentColorAdapter:function(){return $e},DocumentFormattingEditProvider:function(){return ze},DocumentHighlightAdapter:function(){return Le},DocumentLinkAdapter:function(){return Ke},DocumentRangeFormattingEditProvider:function(){return Xe},DocumentSymbolAdapter:function(){return Ve},FoldingRangeAdapter:function(){return qe},HoverAdapter:function(){return Te},ReferenceAdapter:function(){return Ne},RenameAdapter:function(){return Ue},SelectionRangeAdapter:function(){return Ge},WorkerManager:function(){return O},fromPosition:function(){return Ee},fromRange:function(){return Ce},setupMode:function(){return Ze},setupMode1:function(){return Ye},toRange:function(){return xe},toTextEdit:function(){return Se}});var r=n(32363),i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,u=(e,t,n,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let u of a(t))s.call(e,u)||!n&&"default"===u||i(e,u,{get:()=>t[u],enumerable:!(r=o(t,u))||r.enumerable});return e},c={};
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/u(c,r);var d,g,l,f,h,p,m,v,_,w,k,b,y,E,C,x,I,A,S,R,T,D,P,M,L,F,j=12e4,O=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){if(!this._worker)return;let e=Date.now()-this._lastUsedTime;e>j&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=c.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(d||(d={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(g||(g={})),function(e){function t(e,t){return e===Number.MAX_VALUE&&(e=g.MAX_VALUE),t===Number.MAX_VALUE&&(t=g.MAX_VALUE),{line:e,character:t}}function n(e){var t=e;return ve.objectLiteral(t)&&ve.uinteger(t.line)&&ve.uinteger(t.character)}e.create=t,e.is=n}(l||(l={})),function(e){function t(e,t,n,r){if(ve.uinteger(e)&&ve.uinteger(t)&&ve.uinteger(n)&&ve.uinteger(r))return{start:l.create(e,t),end:l.create(n,r)};if(l.is(e)&&l.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")}function n(e){var t=e;return ve.objectLiteral(t)&&l.is(t.start)&&l.is(t.end)}e.create=t,e.is=n}(f||(f={})),function(e){function t(e,t){return{uri:e,range:t}}function n(e){var t=e;return ve.defined(t)&&f.is(t.range)&&(ve.string(t.uri)||ve.undefined(t.uri))}e.create=t,e.is=n}(h||(h={})),function(e){function t(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}}function n(e){var t=e;return ve.defined(t)&&f.is(t.targetRange)&&ve.string(t.targetUri)&&(f.is(t.targetSelectionRange)||ve.undefined(t.targetSelectionRange))&&(f.is(t.originSelectionRange)||ve.undefined(t.originSelectionRange))}e.create=t,e.is=n}(p||(p={})),function(e){function t(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}}function n(e){var t=e;return ve.numberRange(t.red,0,1)&&ve.numberRange(t.green,0,1)&&ve.numberRange(t.blue,0,1)&&ve.numberRange(t.alpha,0,1)}e.create=t,e.is=n}(m||(m={})),function(e){function t(e,t){return{range:e,color:t}}function n(e){var t=e;return f.is(t.range)&&m.is(t.color)}e.create=t,e.is=n}(v||(v={})),function(e){function t(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}}function n(e){var t=e;return ve.string(t.label)&&(ve.undefined(t.textEdit)||A.is(t))&&(ve.undefined(t.additionalTextEdits)||ve.typedArray(t.additionalTextEdits,A.is))}e.create=t,e.is=n}(_||(_={})),function(e){e["Comment"]="comment",e["Imports"]="imports",e["Region"]="region"}(w||(w={})),function(e){function t(e,t,n,r,i){var o={startLine:e,endLine:t};return ve.defined(n)&&(o.startCharacter=n),ve.defined(r)&&(o.endCharacter=r),ve.defined(i)&&(o.kind=i),o}function n(e){var t=e;return ve.uinteger(t.startLine)&&ve.uinteger(t.startLine)&&(ve.undefined(t.startCharacter)||ve.uinteger(t.startCharacter))&&(ve.undefined(t.endCharacter)||ve.uinteger(t.endCharacter))&&(ve.undefined(t.kind)||ve.string(t.kind))}e.create=t,e.is=n}(k||(k={})),function(e){function t(e,t){return{location:e,message:t}}function n(e){var t=e;return ve.defined(t)&&h.is(t.location)&&ve.string(t.message)}e.create=t,e.is=n}(b||(b={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(y||(y={})),function(e){e.Unnecessary=1,e.Deprecated=2}(E||(E={})),function(e){function t(e){var t=e;return void 0!==t&&null!==t&&ve.string(t.href)}e.is=t}(C||(C={})),function(e){function t(e,t,n,r,i,o){var a={range:e,message:t};return ve.defined(n)&&(a.severity=n),ve.defined(r)&&(a.code=r),ve.defined(i)&&(a.source=i),ve.defined(o)&&(a.relatedInformation=o),a}function n(e){var t,n=e;return ve.defined(n)&&f.is(n.range)&&ve.string(n.message)&&(ve.number(n.severity)||ve.undefined(n.severity))&&(ve.integer(n.code)||ve.string(n.code)||ve.undefined(n.code))&&(ve.undefined(n.codeDescription)||ve.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(ve.string(n.source)||ve.undefined(n.source))&&(ve.undefined(n.relatedInformation)||ve.typedArray(n.relatedInformation,b.is))}e.create=t,e.is=n}(x||(x={})),function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return ve.defined(n)&&n.length>0&&(i.arguments=n),i}function n(e){var t=e;return ve.defined(t)&&ve.string(t.title)&&ve.string(t.command)}e.create=t,e.is=n}(I||(I={})),function(e){function t(e,t){return{range:e,newText:t}}function n(e,t){return{range:{start:e,end:e},newText:t}}function r(e){return{range:e,newText:""}}function i(e){var t=e;return ve.objectLiteral(t)&&ve.string(t.newText)&&f.is(t.range)}e.replace=t,e.insert=n,e.del=r,e.is=i}(A||(A={})),function(e){function t(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r}function n(e){var t=e;return void 0!==t&&ve.objectLiteral(t)&&ve.string(t.label)&&(ve.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(ve.string(t.description)||void 0===t.description)}e.create=t,e.is=n}(S||(S={})),function(e){function t(e){var t=e;return"string"===typeof t}e.is=t}(R||(R={})),function(e){function t(e,t,n){return{range:e,newText:t,annotationId:n}}function n(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}}function r(e,t){return{range:e,newText:"",annotationId:t}}function i(e){var t=e;return A.is(t)&&(S.is(t.annotationId)||R.is(t.annotationId))}e.replace=t,e.insert=n,e.del=r,e.is=i}(T||(T={})),function(e){function t(e,t){return{textDocument:e,edits:t}}function n(e){var t=e;return ve.defined(t)&&W.is(t.textDocument)&&Array.isArray(t.edits)}e.create=t,e.is=n}(D||(D={})),function(e){function t(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r}function n(e){var t=e;return t&&"create"===t.kind&&ve.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||ve.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ve.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||R.is(t.annotationId))}e.create=t,e.is=n}(P||(P={})),function(e){function t(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i}function n(e){var t=e;return t&&"rename"===t.kind&&ve.string(t.oldUri)&&ve.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||ve.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ve.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||R.is(t.annotationId))}e.create=t,e.is=n}(M||(M={})),function(e){function t(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r}function n(e){var t=e;return t&&"delete"===t.kind&&ve.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||ve.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||ve.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||R.is(t.annotationId))}e.create=t,e.is=n}(L||(L={})),function(e){function t(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return ve.string(e.kind)?P.is(e)||M.is(e)||L.is(e):D.is(e)})))}e.is=t}(F||(F={}));var N,U,W,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se,ue,ce,de,ge,le,fe,he,pe=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=A.insert(e,t):R.is(n)?(i=n,r=T.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=T.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=A.replace(e,t):R.is(n)?(i=n,r=T.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=T.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=A.del(e):R.is(t)?(r=t,n=T.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=T.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),me=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(R.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();(function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new me(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(D.is(e)){var n=new pe(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new pe(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(W.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version},n=this._textEditChanges[t.uri];if(!n){var r=[],i={textDocument:t,edits:r};this._workspaceEdit.documentChanges.push(i),n=new pe(r,this._changeAnnotations),this._textEditChanges[t.uri]=n}return n}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");n=this._textEditChanges[e];if(!n){r=[];this._workspaceEdit.changes[e]=r,n=new pe(r),this._textEditChanges[e]=n}return n},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new me,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(S.is(t)||R.is(t)?r=t:n=t,void 0===r?i=P.create(e,n):(o=R.is(r)?r:this._changeAnnotations.manage(r),i=P.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(S.is(n)||R.is(n)?i=n:r=n,void 0===i?o=M.create(e,t,r):(a=R.is(i)?i:this._changeAnnotations.manage(i),o=M.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(S.is(t)||R.is(t)?r=t:n=t,void 0===r?i=L.create(e,n):(o=R.is(r)?r:this._changeAnnotations.manage(r),i=L.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}})();(function(e){function t(e){return{uri:e}}function n(e){var t=e;return ve.defined(t)&&ve.string(t.uri)}e.create=t,e.is=n})(N||(N={})),function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return ve.defined(t)&&ve.string(t.uri)&&ve.integer(t.version)}e.create=t,e.is=n}(U||(U={})),function(e){function t(e,t){return{uri:e,version:t}}function n(e){var t=e;return ve.defined(t)&&ve.string(t.uri)&&(null===t.version||ve.integer(t.version))}e.create=t,e.is=n}(W||(W={})),function(e){function t(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}}function n(e){var t=e;return ve.defined(t)&&ve.string(t.uri)&&ve.string(t.languageId)&&ve.integer(t.version)&&ve.string(t.text)}e.create=t,e.is=n}(V||(V={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(H||(H={})),function(e){function t(t){var n=t;return n===e.PlainText||n===e.Markdown}e.is=t}(H||(H={})),function(e){function t(e){var t=e;return ve.objectLiteral(e)&&H.is(t.kind)&&ve.string(t.value)}e.is=t}(K||(K={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(z||(z={})),function(e){e.PlainText=1,e.Snippet=2}(X||(X={})),function(e){e.Deprecated=1}(B||(B={})),function(e){function t(e,t,n){return{newText:e,insert:t,replace:n}}function n(e){var t=e;return t&&ve.string(t.newText)&&f.is(t.insert)&&f.is(t.replace)}e.create=t,e.is=n}($||($={})),function(e){e.asIs=1,e.adjustIndentation=2}(q||(q={})),function(e){function t(e){return{label:e}}e.create=t}(Q||(Q={})),function(e){function t(e,t){return{items:e||[],isIncomplete:!!t}}e.create=t}(G||(G={})),function(e){function t(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}function n(e){var t=e;return ve.string(t)||ve.objectLiteral(t)&&ve.string(t.language)&&ve.string(t.value)}e.fromPlainText=t,e.is=n}(J||(J={})),function(e){function t(e){var t=e;return!!t&&ve.objectLiteral(t)&&(K.is(t.contents)||J.is(t.contents)||ve.typedArray(t.contents,J.is))&&(void 0===e.range||f.is(e.range))}e.is=t}(Y||(Y={})),function(e){function t(e,t){return t?{label:e,documentation:t}:{label:e}}e.create=t}(Z||(Z={})),function(e){function t(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return ve.defined(t)&&(i.documentation=t),ve.defined(n)?i.parameters=n:i.parameters=[],i}e.create=t}(ee||(ee={})),function(e){e.Text=1,e.Read=2,e.Write=3}(te||(te={})),function(e){function t(e,t){var n={range:e};return ve.number(t)&&(n.kind=t),n}e.create=t}(ne||(ne={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(re||(re={})),function(e){e.Deprecated=1}(ie||(ie={})),function(e){function t(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}e.create=t}(oe||(oe={})),function(e){function t(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a}function n(e){var t=e;return t&&ve.string(t.name)&&ve.number(t.kind)&&f.is(t.range)&&f.is(t.selectionRange)&&(void 0===t.detail||ve.string(t.detail))&&(void 0===t.deprecated||ve.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}e.create=t,e.is=n}(ae||(ae={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(se||(se={})),function(e){function t(e,t){var n={diagnostics:e};return void 0!==t&&null!==t&&(n.only=t),n}function n(e){var t=e;return ve.defined(t)&&ve.typedArray(t.diagnostics,x.is)&&(void 0===t.only||ve.typedArray(t.only,ve.string))}e.create=t,e.is=n}(ue||(ue={})),function(e){function t(e,t,n){var r={title:e},i=!0;return"string"===typeof t?(i=!1,r.kind=t):I.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r}function n(e){var t=e;return t&&ve.string(t.title)&&(void 0===t.diagnostics||ve.typedArray(t.diagnostics,x.is))&&(void 0===t.kind||ve.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||I.is(t.command))&&(void 0===t.isPreferred||ve.boolean(t.isPreferred))&&(void 0===t.edit||F.is(t.edit))}e.create=t,e.is=n}(ce||(ce={})),function(e){function t(e,t){var n={range:e};return ve.defined(t)&&(n.data=t),n}function n(e){var t=e;return ve.defined(t)&&f.is(t.range)&&(ve.undefined(t.command)||I.is(t.command))}e.create=t,e.is=n}(de||(de={})),function(e){function t(e,t){return{tabSize:e,insertSpaces:t}}function n(e){var t=e;return ve.defined(t)&&ve.uinteger(t.tabSize)&&ve.boolean(t.insertSpaces)}e.create=t,e.is=n}(ge||(ge={})),function(e){function t(e,t,n){return{range:e,target:t,data:n}}function n(e){var t=e;return ve.defined(t)&&f.is(t.range)&&(ve.undefined(t.target)||ve.string(t.target))}e.create=t,e.is=n}(le||(le={})),function(e){function t(e,t){return{range:e,parent:t}}function n(t){var n=t;return void 0!==n&&f.is(n.range)&&(void 0===n.parent||e.is(n.parent))}e.create=t,e.is=n}(fe||(fe={})),function(e){function t(e,t,n,r){return new _e(e,t,n,r)}function n(e){var t=e;return!!(ve.defined(t)&&ve.string(t.uri)&&(ve.undefined(t.languageId)||ve.string(t.languageId))&&ve.uinteger(t.lineCount)&&ve.func(t.getText)&&ve.func(t.positionAt)&&ve.func(t.offsetAt))}function r(e,t){for(var n=e.getText(),r=i(t,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=n.length,a=r.length-1;a>=0;a--){var s=r[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");n=n.substring(0,u)+s.newText+n.substring(c,n.length),o=u}return n}function i(e,t){if(e.length<=1)return e;var n=e.length/2|0,r=e.slice(0,n),o=e.slice(n);i(r,t),i(o,t);var a=0,s=0,u=0;while(a<r.length&&s<o.length){var c=t(r[a],o[s]);e[u++]=c<=0?r[a++]:o[s++]}while(a<r.length)e[u++]=r[a++];while(s<o.length)e[u++]=o[s++];return e}e.create=t,e.is=n,e.applyEdits=r}(he||(he={}));var ve,_e=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return l.create(0,e);while(n<r){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return l.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();(function(e){var t=Object.prototype.toString;function n(e){return"undefined"!==typeof e}function r(e){return"undefined"===typeof e}function i(e){return!0===e||!1===e}function o(e){return"[object String]"===t.call(e)}function a(e){return"[object Number]"===t.call(e)}function s(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r}function u(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647}function c(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647}function d(e){return"[object Function]"===t.call(e)}function g(e){return null!==e&&"object"===typeof e}function l(e,t){return Array.isArray(e)&&e.every(t)}e.defined=n,e.undefined=r,e.boolean=i,e.string=o,e.number=a,e.numberRange=s,e.integer=u,e.uinteger=c,e.func=d,e.objectLiteral=g,e.typedArray=l})(ve||(ve={}));var we=class{constructor(e,t,n){this._languageId=e,this._worker=t;const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{c.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(c.editor.onDidCreateModel(r)),this._disposables.push(c.editor.onWillDisposeModel(i)),this._disposables.push(c.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{c.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{c.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),c.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((t=>be(e,t)));let i=c.editor.getModel(e);i&&i.getLanguageId()===t&&c.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function ke(e){switch(e){case y.Error:return c.MarkerSeverity.Error;case y.Warning:return c.MarkerSeverity.Warning;case y.Information:return c.MarkerSeverity.Info;case y.Hint:return c.MarkerSeverity.Hint;default:return c.MarkerSeverity.Info}}function be(e,t){let n="number"===typeof t.code?String(t.code):t.code;return{severity:ke(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}var ye=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),Ee(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new c.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:Re(e.command),range:i,kind:Ae(e.kind)};return e.textEdit&&(Ie(e.textEdit)?t.range={insert:xe(e.textEdit.insert),replace:xe(e.textEdit.replace)}:t.range=xe(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Se)),e.insertTextFormat===X.Snippet&&(t.insertTextRules=c.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function Ee(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function Ce(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function xe(e){if(e)return new c.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function Ie(e){return"undefined"!==typeof e.insert&&"undefined"!==typeof e.replace}function Ae(e){const t=c.languages.CompletionItemKind;switch(e){case z.Text:return t.Text;case z.Method:return t.Method;case z.Function:return t.Function;case z.Constructor:return t.Constructor;case z.Field:return t.Field;case z.Variable:return t.Variable;case z.Class:return t.Class;case z.Interface:return t.Interface;case z.Module:return t.Module;case z.Property:return t.Property;case z.Unit:return t.Unit;case z.Value:return t.Value;case z.Enum:return t.Enum;case z.Keyword:return t.Keyword;case z.Snippet:return t.Snippet;case z.Color:return t.Color;case z.File:return t.File;case z.Reference:return t.Reference}return t.Property}function Se(e){if(e)return{range:xe(e.range),text:e.newText}}function Re(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var Te=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),Ee(t)))).then((e=>{if(e)return{range:xe(e.range),contents:Me(e.contents)}}))}};function De(e){return e&&"object"===typeof e&&"string"===typeof e.kind}function Pe(e){return"string"===typeof e?{value:e}:De(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function Me(e){if(e)return Array.isArray(e)?e.map(Pe):[Pe(e)]}var Le=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),Ee(t)))).then((e=>{if(e)return e.map((e=>({range:xe(e.range),kind:Fe(e.kind)})))}))}};function Fe(e){switch(e){case te.Read:return c.languages.DocumentHighlightKind.Read;case te.Write:return c.languages.DocumentHighlightKind.Write;case te.Text:return c.languages.DocumentHighlightKind.Text}return c.languages.DocumentHighlightKind.Text}var je=class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),Ee(t)))).then((e=>{if(e)return[Oe(e)]}))}};function Oe(e){return{uri:c.Uri.parse(e.uri),range:xe(e.range)}}var Ne=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),Ee(t)))).then((e=>{if(e)return e.map(Oe)}))}},Ue=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),Ee(t),n))).then((e=>We(e)))}};function We(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=c.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,edit:{range:xe(i.range),text:i.newText}})}return{edits:t}}var Ve=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:He(e.kind),range:xe(e.location.range),selectionRange:xe(e.location.range),tags:[]})))}))}};function He(e){let t=c.languages.SymbolKind;switch(e){case re.File:return t.Array;case re.Module:return t.Module;case re.Namespace:return t.Namespace;case re.Package:return t.Package;case re.Class:return t.Class;case re.Method:return t.Method;case re.Property:return t.Property;case re.Field:return t.Field;case re.Constructor:return t.Constructor;case re.Enum:return t.Enum;case re.Interface:return t.Interface;case re.Function:return t.Function;case re.Variable:return t.Variable;case re.Constant:return t.Constant;case re.String:return t.String;case re.Number:return t.Number;case re.Boolean:return t.Boolean;case re.Array:return t.Array}return t.Function}var Ke=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:xe(e.range),url:e.target})))}}))}},ze=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,Be(t)).then((e=>{if(e&&0!==e.length)return e.map(Se)}))))}},Xe=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),Ce(t),Be(n)).then((e=>{if(e&&0!==e.length)return e.map(Se)}))))}};function Be(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var $e=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:xe(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,Ce(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=Se(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Se)),t}))}))}},qe=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(t.kind=Qe(e.kind)),t}))}))}};function Qe(e){switch(e){case w.Comment:return c.languages.FoldingRangeKind.Comment;case w.Imports:return c.languages.FoldingRangeKind.Imports;case w.Region:return c.languages.FoldingRangeKind.Region}}var Ge=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(Ee)))).then((e=>{if(e)return e.map((e=>{const t=[];while(e)t.push({range:xe(e.range)}),e=e.parent;return t}))}))}},Je=class extends ye{constructor(e){super(e,[".",":","<",'"',"=","/"])}};function Ye(e){const t=new O(e),n=(...e)=>t.getLanguageServiceWorker(...e);let r=e.languageId;c.languages.registerCompletionItemProvider(r,new Je(n)),c.languages.registerHoverProvider(r,new Te(n)),c.languages.registerDocumentHighlightProvider(r,new Le(n)),c.languages.registerLinkProvider(r,new Ke(n)),c.languages.registerFoldingRangeProvider(r,new qe(n)),c.languages.registerDocumentSymbolProvider(r,new Ve(n)),c.languages.registerSelectionRangeProvider(r,new Ge(n)),c.languages.registerRenameProvider(r,new Ue(n)),"html"===r&&(c.languages.registerDocumentFormattingEditProvider(r,new ze(n)),c.languages.registerDocumentRangeFormattingEditProvider(r,new Xe(n)))}function Ze(e){const t=[],n=[],r=new O(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);function o(){const{languageId:t,modeConfiguration:r}=e;tt(n),r.completionItems&&n.push(c.languages.registerCompletionItemProvider(t,new Je(i))),r.hovers&&n.push(c.languages.registerHoverProvider(t,new Te(i))),r.documentHighlights&&n.push(c.languages.registerDocumentHighlightProvider(t,new Le(i))),r.links&&n.push(c.languages.registerLinkProvider(t,new Ke(i))),r.documentSymbols&&n.push(c.languages.registerDocumentSymbolProvider(t,new Ve(i))),r.rename&&n.push(c.languages.registerRenameProvider(t,new Ue(i))),r.foldingRanges&&n.push(c.languages.registerFoldingRangeProvider(t,new qe(i))),r.selectionRanges&&n.push(c.languages.registerSelectionRangeProvider(t,new Ge(i))),r.documentFormattingEdits&&n.push(c.languages.registerDocumentFormattingEditProvider(t,new ze(i))),r.documentRangeFormattingEdits&&n.push(c.languages.registerDocumentRangeFormattingEditProvider(t,new Xe(i)))}return o(),t.push(et(n)),et(t)}function et(e){return{dispose:()=>tt(e)}}function tt(e){while(e.length)e.pop().dispose()}}}]);
//# sourceMappingURL=5377.e499dfba.js.map