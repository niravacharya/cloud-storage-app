/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014
 * @version 3.0.0
 * bootstrap-fileinput
 * For more JQuery Plugins visit http://plugins.krajee.com
 */
! function(e) {
    var i = 'style="width:{width};height:{height};"',
        t = '   <div class="text-center"><small>{caption}</small></div>\n',
        n = '      <param name="controller" value="true" />\n      <param name="allowFullScreen" value="true" />\n      <param name="allowScriptAccess" value="always" />\n      <param name="autoPlay" value="false" />\n      <param name="autoStart" value="false" />\n      <param name="quality" value="high" />\n',
        a = '<div class="file-preview-other" ' + i + '>\n       <h2><i class="glyphicon glyphicon-file"></i></h2>\n   </div>',
        r = {
            main1: '{preview}\n<div class="input-group {class}">\n   {caption}\n   <div class="input-group-btn">\n       {remove}\n       {upload}\n       {browse}\n   </div>\n</div>',
            main2: "{preview}\n{remove}\n{upload}\n{browse}\n",
            preview: '<div class="file-preview {class}">\n   <div class="close fileinput-remove text-right">&times;</div>\n   <div class="file-preview-thumbnails"></div>\n   <div class="clearfix"></div>   <div class="file-preview-status text-center text-success"></div>\n   <div class="kv-fileinput-error"></div>\n</div>',
            icon: '<span class="glyphicon glyphicon-file kv-caption-icon"></span>',
            caption: '<div tabindex="-1" class="form-control file-caption {class}">\n   <div class="file-caption-name"></div>\n</div>',
            modal: '<div id="{id}" class="modal fade">\n  <div class="modal-dialog modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h3 class="modal-title">Detailed Preview <small>{title}</small></h3>\n      </div>\n      <div class="modal-body">\n        <textarea class="form-control" style="font-family:Monaco,Consolas,monospace; height: {height}px;" readonly>{body}</textarea>\n      </div>\n    </div>\n  </div>\n</div>\n'
        }, l = ["image", "html", "text", "video", "audio", "flash", "object"],
        o = {
            generic: '<div class="file-preview-frame" id="{previewId}">\n   {content}\n</div>\n',
            html: '<div class="file-preview-frame" id="{previewId}">\n    <object data="{data}" type="{type}" width="{width}" height="{height}">\n       ' + a + "\n    </object>\n" + t + "</div>",
            image: '<div class="file-preview-frame" id="{previewId}">\n   <img src="{data}" class="file-preview-image" title="{caption}" alt="{caption}" ' + i + ">\n</div>\n",
            text: '<div class="file-preview-frame" id="{previewId}">\n   <div class="file-preview-text" title="{caption}" ' + i + ">\n       {data}\n   </div>\n</div>\n",
            video: '<div class="file-preview-frame" id="{previewId}" title="{caption}" ' + i + '>\n   <video width="{width}" height="{height}" controls>\n       <source src="{data}" type="{type}">\n       ' + a + "\n   </video>\n" + t + "</div>\n",
            audio: '<div class="file-preview-frame" id="{previewId}" title="{caption}" ' + i + '>\n   <audio controls>\n       <source src="{data}" type="{type}">\n       ' + a + "\n   </audio>\n" + t + "</div>\n",
            flash: '<div class="file-preview-frame" id="{previewId}" title="{caption}" ' + i + '>\n   <object type="application/x-shockwave-flash" width="{width}" height="{height}" data="{data}">\n' + n + "       " + a + "\n   </object>\n" + t + "</div>\n",
            object: '<div class="file-preview-frame" id="{previewId}" title="{caption}" ' + i + '>\n    <object data="{data}" type="{type}" width="{width}" height="{height}">\n      <param name="movie" value="{caption}" />\n' + n + "           " + a + "\n   </object>\n" + t + "</div>",
            other: '<div class="file-preview-frame" id="{previewId}" title="{caption}" ' + i + ">\n   " + a + "\n" + t + "</div>"
        }, s = {
            image: {
                width: "auto",
                height: "160px"
            },
            html: {
                width: "320px",
                height: "180px"
            },
            text: {
                width: "160px",
                height: "160px"
            },
            video: {
                width: "320px",
                height: "240px"
            },
            audio: {
                width: "320px",
                height: "80px"
            },
            flash: {
                width: "320px",
                height: "240px"
            },
            object: {
                width: "320px",
                height: "300px"
            },
            other: {
                width: "160px",
                height: "120px"
            }
        }, p = {
            image: function(e, i) {
                return "undefined" != typeof e ? e.match("image.*") : i.match(/\.(gif|png|jpe?g)$/i)
            },
            html: function(e, i) {
                return "undefined" != typeof e ? "text/html" == e : i.match(/\.(htm|html)$/i)
            },
            text: function(e, i) {
                return "undefined" != typeof e && e.match("text.*") || i.match(/\.(txt|md|csv|nfo|php|ini)$/i)
            },
            video: function(e, i) {
                return "undefined" != typeof e && e.match(/\.video\/(ogg|mp4|webm)$/i) || i.match(/\.(og?|mp4|webm)$/i)
            },
            audio: function(e, i) {
                return "undefined" != typeof e && e.match(/\.audio\/(ogg|mp3|wav)$/i) || i.match(/\.(ogg|mp3|wav)$/i)
            },
            flash: function(e, i) {
                return "undefined" != typeof e && "application/x-shockwave-flash" == e || i.match(/\.(swf)$/i)
            },
            object: function() {
                return !0
            },
            other: function() {
                return !0
            }
        }, d = function(i, t) {
            return null === i || void 0 === i || i == [] || "" === i || t && "" === e.trim(i)
        }, c = function(e) {
            return Array.isArray(e) || "[object Array]" === Object.prototype.toString.call(e)
        }, m = function(e, i) {
            return "object" == typeof i && e in i
        }, v = function(i, t, n) {
            return d(i) || d(i[t]) ? n : e(i[t])
        }, u = function() {
            return Math.round((new Date).getTime() + 100 * Math.random())
        }, g = function(e) {
            var i, t = document.createElement("div");
            return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", i = 1 == t.getElementsByTagName("i").length, document.body.appendChild(t), t.parentNode.removeChild(t), i
        }, f = function() {
            return window.File && window.FileReader && window.FileList && window.Blob
        }, w = function(e) {
            return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }, h = window.URL || window.webkitURL,
        b = function(i, t) {
            this.$element = e(i), f() || g(9) ? (this.init(t), this.listen()) : this.$element.removeClass("file-loading")
        };
    b.prototype = {
        constructor: b,
        init: function(e) {
            var i = this;
            i.reader = null, i.isIE9 = g(9), i.isIE10 = g(10), i.showCaption = e.showCaption, i.showPreview = e.showPreview, i.autoFitCaption = e.autoFitCaption, i.maxFileSize = e.maxFileSize, i.maxFileCount = e.maxFileCount, i.msgSizeTooLarge = e.msgSizeTooLarge, i.msgFilesTooMany = e.msgFilesTooMany, i.msgFileNotFound = e.msgFileNotFound, i.msgFileNotReadable = e.msgFileNotReadable, i.msgFilePreviewAborted = e.msgFilePreviewAborted, i.msgFilePreviewError = e.msgFilePreviewError, i.msgValidationError = e.msgValidationError, i.msgErrorClass = e.msgErrorClass, i.initialDelimiter = e.initialDelimiter, i.initialPreview = e.initialPreview, i.initialCaption = e.initialCaption, i.initialPreviewCount = e.initialPreviewCount, i.initialPreviewContent = e.initialPreviewContent, i.overwriteInitial = e.overwriteInitial, i.layoutTemplates = e.layoutTemplates, i.previewTemplates = e.previewTemplates, i.allowedPreviewTypes = d(e.allowedPreviewTypes) ? l : e.allowedPreviewTypes, i.allowedPreviewMimeTypes = e.allowedPreviewMimeTypes, i.allowedFileTypes = e.allowedFileTypes, i.allowedFileExtensions = e.allowedFileExtensions, i.previewSettings = e.previewSettings, i.fileTypeSettings = e.fileTypeSettings, i.showRemove = e.showRemove, i.showUpload = e.showUpload, i.captionClass = e.captionClass, i.previewClass = e.previewClass, i.mainClass = e.mainClass, i.mainTemplate = i.getLayoutTemplate(i.showCaption ? "main1" : "main2"), i.captionTemplate = i.getLayoutTemplate("caption"), i.previewGenericTemplate = i.getPreviewTemplate("generic"), i.browseLabel = e.browseLabel, i.browseIcon = e.browseIcon, i.browseClass = e.browseClass, i.removeLabel = e.removeLabel, i.removeIcon = e.removeIcon, i.removeClass = e.removeClass, i.uploadLabel = e.uploadLabel, i.uploadIcon = e.uploadIcon, i.uploadClass = e.uploadClass, i.uploadUrl = e.uploadUrl, i.msgLoading = e.msgLoading, i.msgProgress = e.msgProgress, i.msgSelected = e.msgSelected, i.msgInvalidFileType = e.msgInvalidFileType, i.msgInvalidFileExtension = e.msgInvalidFileExtension, i.previewFileType = e.previewFileType, i.wrapTextLength = e.wrapTextLength, i.wrapIndicator = e.wrapIndicator, i.isError = !1, i.isDisabled = i.$element.attr("disabled") || i.$element.attr("readonly"), i.slug = "function" == typeof e.slugCallback ? e.slugCallback : i.slugDefault, d(i.$element.attr("id")) && i.$element.attr("id", u()), "undefined" == typeof i.$container ? i.$container = i.createContainer() : i.refreshContainer(), i.$captionContainer = v(e, "elCaptionContainer", i.$container.find(".file-caption")), i.$caption = v(e, "elCaptionText", i.$container.find(".file-caption-name")), i.$previewContainer = v(e, "elPreviewContainer", i.$container.find(".file-preview")), i.$preview = v(e, "elPreviewImage", i.$container.find(".file-preview-thumbnails")), i.$previewStatus = v(e, "elPreviewStatus", i.$container.find(".file-preview-status")), i.$errorContainer = v(e, "elErrorContainer", i.$previewContainer.find(".kv-fileinput-error")), d(i.msgErrorClass) || i.$errorContainer.removeClass(i.msgErrorClass).addClass(i.msgErrorClass), i.$errorContainer.hide();
            var t = i.initialPreview;
            i.initialPreviewCount = c(t) ? t.length : t.length > 0 ? t.split(i.initialDelimiter).length : 0, i.initPreview(), i.original = {
                preview: i.$preview.html(),
                caption: i.$caption.html()
            }, i.options = e, i.autoSizeCaption(), i.$element.removeClass("file-loading")
        },
        getLayoutTemplate: function(e) {
            var i = this;
            return m(e, i.layoutTemplates) ? i.layoutTemplates[e] : r[e]
        },
        getPreviewTemplate: function(e) {
            var i = this;
            return m(e, i.previewTemplates) ? i.previewTemplates[e] : o[e]
        },
        listen: function() {
            var i = this,
                t = i.$element,
                n = i.$captionContainer,
                a = i.$btnFile;
            t.on("change", e.proxy(i.change, i)), e(window).on("resize", function() {
                setTimeout(function() {
                    i.autoSizeCaption()
                }, 100)
            }), a.on("click", function() {
                i.$element.trigger("filebrowse"), n.focus()
            }), t.closest("form").on("reset", e.proxy(i.reset, i)), i.$container.on("click", ".fileinput-remove:not([disabled])", e.proxy(i.clear, i))
        },
        refresh: function(i) {
            var t = this,
                n = arguments.length ? e.extend(t.options, i) : t.options;
            t.$element.off(), t.init(n)
        },
        initPreview: function() {
            var e = this,
                i = "",
                t = e.initialPreview,
                n = e.initialPreviewCount,
                a = e.initialCaption.length,
                r = "preview-" + u(),
                l = a > 0 ? e.initialCaption : e.msgSelected.replace(/\{n\}/g, n);
            if (c(t) && n > 0) {
                for (var o = 0; n > o; o++) r += "-" + o, i += e.previewGenericTemplate.replace(/\{previewId\}/g, r).replace(/\{content\}/g, t[o]);
                n > 1 && 0 == a && (l = e.msgSelected.replace(/\{n\}/g, n))
            } else {
                if (!(n > 0)) return a > 0 ? void e.setCaption(l) : void 0;
                for (var s = t.split(e.initialDelimiter), o = 0; n > o; o++) r += "-" + o, i += e.previewGenericTemplate.replace(/\{previewId\}/g, r).replace(/\{content\}/g, s[o]);
                n > 1 && 0 == a && (l = e.msgSelected.replace(/\{n\}/g, n))
            }
            e.initialPreviewContent = i, e.$preview.html(i), e.setCaption(l), e.$container.removeClass("file-input-new")
        },
        clearObjects: function() {
            var i = this,
                t = i.$preview;
            t.find("video audio").each(function() {
                this.pause(), delete this, e(this).remove()
            }), t.find("img object div").each(function() {
                delete this, e(this).remove()
            })
        },
        clearFileInput: function() {
            var i = this,
                t = i.$element;
            if (!d(t.val()))
                if (i.isIE9 || i.isIE10) {
                    var n = t.closest("form"),
                        a = e(document.createElement("form")),
                        r = e(document.createElement("div"));
                    t.before(r), n.length ? n.after(a) : r.after(a), a.append(t).trigger("reset"), r.before(t).remove(), a.remove()
                } else t.val("")
        },
        clear: function() {
            var e = this,
                i = arguments.length && arguments[0];
            if (!e.isIE9 && e.reader instanceof FileReader && e.reader.abort(), e.autoSizeCaption(), e.clearFileInput(), e.resetErrors(!0), i !== !1 && (e.$element.trigger("change"), e.$element.trigger("fileclear")), e.overwriteInitial && (e.initialPreviewCount = 0), e.overwriteInitial || d(e.initialPreviewContent)) {
                e.clearObjects(), e.$preview.html("");
                var t = !e.overwriteInitial && e.initialCaption.length > 0 ? e.original.caption : "";
                e.$caption.html(t), e.$caption.attr("title", ""), e.$container.removeClass("file-input-new").addClass("file-input-new")
            } else e.showFileIcon(), e.$preview.html(e.original.preview), e.$caption.html(e.original.caption), e.$container.removeClass("file-input-new");
            e.hideFileIcon(), e.$element.trigger("filecleared"), e.$captionContainer.focus()
        },
        reset: function() {
            var e = this;
            e.clear(!1), e.$preview.html(e.original.preview), e.$caption.html(e.original.caption), e.$container.find(".fileinput-filename").text(""), e.$element.trigger("filereset"), e.initialPreview.length > 0 && e.$container.removeClass("file-input-new")
        },
        disable: function() {
            var e = this;
            e.isDisabled = !0, e.$element.attr("disabled", "disabled"), e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .kv-fileinput-upload").attr("disabled", !0)
        },
        enable: function() {
            var e = this;
            e.isDisabled = !1, e.$element.removeAttr("disabled"), e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .kv-fileinput-upload").removeAttr("disabled")
        },
        hideFileIcon: function() {
            this.overwriteInitial && this.$captionContainer.find(".kv-caption-icon").hide()
        },
        showFileIcon: function() {
            this.$captionContainer.find(".kv-caption-icon").show()
        },
        resetErrors: function(e) {
            var i = this,
                t = i.$errorContainer;
            i.isError = !1, i.$container.removeClass("has-error"), e ? t.fadeOut("slow") : t.hide()
        },
        showError: function(e, i, t, n) {
            var a = this,
                r = a.$errorContainer,
                l = a.$element;
            return r.html(e), r.fadeIn(800), l.trigger("fileerror", [i, t, n]), a.clearFileInput(), a.$container.removeClass("has-error").addClass("has-error"), !0
        },
        errorHandler: function(e, i) {
            var t = this;
            switch (e.target.error.code) {
                case e.target.error.NOT_FOUND_ERR:
                    t.addError(t.msgFileNotFound.replace(/\{name\}/g, i));
                    break;
                case e.target.error.NOT_READABLE_ERR:
                    t.addError(t.msgFileNotReadable.replace(/\{name\}/g, i));
                    break;
                case e.target.error.ABORT_ERR:
                    t.addError(t.msgFilePreviewAborted.replace(/\{name\}/g, i));
                    break;
                default:
                    t.addError(t.msgFilePreviewError.replace(/\{name\}/g, i))
            }
        },
        parseFileType: function(e) {
            for (var i, t, n = 0; n < l.length; n++)
                if (cat = l[n], i = m(cat, self.fileTypeSettings) ? self.fileTypeSettings[cat] : p[cat], t = i(e.type, e.name) ? cat : "", "" != t) return t;
            return "other"
        },
        previewDefault: function(i, t) {
            var n = this,
                a = h.createObjectURL(i),
                r = e("#" + t),
                l = m("other", n.previewTemplates) ? n.previewTemplates.other : o.other;
            n.$preview.append("\n" + l.replace(/\{previewId\}/g, t).replace(/\{caption\}/g, n.slug(i.name)).replace(/\{type\}/g, i.type).replace(/\{data\}/g, a)), r.on("load", function() {
                h.revokeObjectURL(r.attr("data"))
            })
        },
        previewFile: function(e, i, t, n) {
            var n, a, r = this,
                l = r.parseFileType(e),
                p = r.slug(e.name),
                c = r.allowedPreviewTypes,
                v = r.allowedPreviewMimeTypes,
                g = (e.type, m(l, r.previewTemplates) ? r.previewTemplates[l] : o[l]),
                f = m(l, r.previewSettings) ? r.previewSettings[l] : s[l],
                b = parseInt(r.wrapTextLength),
                y = r.wrapIndicator,
                C = r.$preview,
                $ = c.indexOf(l) >= 0,
                F = d(v) || !d(v) && m(e.type, v);
            if ($ && F) {
                if ("text" == l) {
                    var x = w(i.target.result);
                    if (h.revokeObjectURL(n), x.length > b) {
                        var T = "text-" + u(),
                            I = .75 * window.innerHeight,
                            E = r.getLayoutTemplate("modal").replace(/\{id\}/g, T).replace(/\{title\}/g, p).replace(/\{height\}/g, I).replace(/\{body\}/g, x);
                        y = y.replace(/\{title\}/g, p).replace(/\{dialog\}/g, "$('#" + T + "').modal('show')"), x = x.substring(0, b - 1) + y
                    }
                    a = g.replace(/\{previewId\}/g, t).replace(/\{caption\}/g, p).replace(/\{type\}/g, e.type).replace(/\{width\}/g, f.width).replace(/\{height\}/g, f.height).replace(/\{data\}/g, x) + E
                } else a = g.replace(/\{previewId\}/g, t).replace(/\{caption\}/g, p).replace(/\{type\}/g, e.type).replace(/\{data\}/g, n).replace(/\{width\}/g, f.width).replace(/\{height\}/g, f.height);
                C.append("\n" + a), r.autoSizeImage(t)
            } else r.previewDefault(e, t)
        },
        slugDefault: function(e) {
            return d(e) ? "" : e.split(/(\\|\/)/g).pop().replace(/[^\w-.\\\/ ]+/g, "")
        },
        readFiles: function(e) {
            function i(p) {
                if (p >= f) return l.removeClass("loading"), void o.html("");
                var m, u, y, C, $, F = g + "-" + p,
                    x = e[p],
                    T = t.slug(x.name),
                    I = (x.size ? x.size : 0) / 1e3,
                    E = h.createObjectURL(x),
                    P = 0,
                    S = t.allowedFileTypes,
                    L = d(S) ? "" : S.join(", "),
                    R = t.allowedFileExtensions,
                    k = d(R) ? "" : R.join(", "),
                    j = d(R) ? "" : new RegExp("\\.(" + R.join("|") + ")$", "i");
                if (I = I.toFixed(2), t.maxFileSize > 0 && I > t.maxFileSize) return y = t.msgSizeTooLarge.replace(/\{name\}/g, T).replace(/\{size\}/g, I).replace(/\{maxSize\}/g, t.maxFileSize), void(t.isError = t.showError(y, x, F, p));
                if (!d(S) && c(S)) {
                    for (u = 0; u < S.length; u++) C = S[u], m = w[C], $ = void 0 !== m && m(x.type, T), P += d($) ? 0 : $.length;
                    if (0 == P) return y = t.msgInvalidFileType.replace(/\{name\}/g, T).replace(/\{types\}/g, L), void(t.isError = t.showError(y, x, F, p))
                }
                return 0 != P || d(R) || !c(R) || d(j) || ($ = T.match(j), P += d($) ? 0 : $.length, 0 != P) ? t.showPreview ? void(a.length > 0 && "undefined" != typeof FileReader ? (o.html(s.replace(/\{index\}/g, p + 1).replace(/\{files\}/g, f)), l.addClass("loading"), r.onerror = function(e) {
                    t.errorHandler(e, T)
                }, r.onload = function(e) {
                    t.previewFile(x, e, F, E)
                }, r.onloadend = function() {
                    var e = v.replace(/\{index\}/g, p + 1).replace(/\{files\}/g, f).replace(/\{percent\}/g, 100).replace(/\{name\}/g, T);
                    setTimeout(function() {
                        o.html(e), h.revokeObjectURL(E)
                    }, 1e3), setTimeout(function() {
                        i(p + 1), t.updateFileDetails(f)
                    }, 1500), n.trigger("fileloaded", [x, F, p])
                }, r.onprogress = function(e) {
                    if (e.lengthComputable) {
                        var i = parseInt(e.loaded / e.total * 100, 10),
                            t = v.replace(/\{index\}/g, p + 1).replace(/\{files\}/g, f).replace(/\{percent\}/g, i).replace(/\{name\}/g, T);
                        setTimeout(function() {
                            o.html(t)
                        }, 1e3)
                    }
                }, b(x.type, T) ? r.readAsText(x) : r.readAsArrayBuffer(x)) : (t.previewDefault(x, F), setTimeout(function() {
                    i(p + 1), t.updateFileDetails(f)
                }, 1500), n.trigger("fileloaded", [x, F, p]))) : (n.trigger("fileloaded", [x, F, p]), void setTimeout(i(p + 1), 1e3)) : (y = t.msgInvalidFileExtension.replace(/\{name\}/g, T).replace(/\{extensions\}/g, k), void(t.isError = t.showError(y, x, F, p)))
            }
            this.reader = new FileReader;
            var t = this,
                n = t.$element,
                a = t.$preview,
                r = t.reader,
                l = t.$previewContainer,
                o = t.$previewStatus,
                s = t.msgLoading,
                v = t.msgProgress,
                g = (t.msgSelected, t.previewFileType, parseInt(t.wrapTextLength), t.wrapIndicator, "preview-" + u()),
                f = e.length,
                w = t.fileTypeSettings,
                b = m("text", w) ? w.text : p.text;
            i(0), t.updateFileDetails(f, !1)
        },
        updateFileDetails: function(e) {
            var i = this,
                t = i.msgSelected,
                n = i.$element,
                a = i.slug(n.val()),
                r = e > 1 ? t.replace(/\{n\}/g, e) : a;
            i.isError ? (i.$previewContainer.removeClass("loading"), i.$previewStatus.html(""), i.$captionContainer.find(".kv-caption-icon").hide(), r = i.msgValidationError) : i.showFileIcon(), i.setCaption(r), i.$container.removeClass("file-input-new"), 1 == arguments.length && n.trigger("fileselect", [e, a])
        },
        change: function(e) {
            {
                var i, t = this,
                    n = t.$element,
                    a = (t.slug(n.val()), 0),
                    r = t.$preview,
                    l = n.get(0).files;
                t.msgSelected, d(l) ? 1 : l.length + t.initialPreviewCount
            }
            if (!t.isError) {
                if (t.hideFileIcon(), i = void 0 === e.target.files ? e.target && e.target.value ? [{
                        name: e.target.value.replace(/^.+\\/, "")
                    }] : [] : e.target.files, d(i) || 0 === i.length) return t.clear(!1), void n.trigger("fileselectnone");
                t.resetErrors(), r.html(""), t.overwriteInitial || r.html(t.initialPreviewContent);
                var a = i.length;
                if (t.maxFileCount > 0 && a > t.maxFileCount) {
                    var o = t.msgFilesTooMany.replace(/\{m\}/g, t.maxFileCount).replace(/\{n\}/g, a);
                    return t.isError = t.showError(o, null, null, null), t.$captionContainer.find(".kv-caption-icon").hide(), t.$caption.html(t.msgValidationError), void t.$container.removeClass("file-input-new")
                }
                t.isIE9 ? t.updateFileDetails(1) : t.readFiles(l), t.reader = null
            }
        },
        autoSizeImage: function(e) {
            var i = this,
                t = i.$preview,
                n = t.find("#" + e),
                a = n.find("img");
            a.length && a.on("load", function() {
                var r = n.width(),
                    l = t.width();
                r > l && (a.css("width", "100%"), n.css("width", "97%")), i.$element.trigger("fileimageloaded", e)
            })
        },
        autoSizeCaption: function() {
            var e = this;
            0 != e.$caption.length && e.autoFitCaption && (e.$caption.css("width", 0), setTimeout(function() {
                var i = e.$captionContainer.width();
                e.$caption.css("width", .98 * i)
            }, 100))
        },
        setCaption: function(i) {
            var t = this,
                n = e("<div>" + i + "</div>").text(),
                a = t.layoutTemplates.icon,
                r = a + n;
            0 != t.$caption.length && (t.$caption.html(r), t.$caption.attr("title", n), t.autoSizeCaption())
        },
        initBrowse: function(e) {
            var i = this;
            i.$btnFile = e.find(".btn-file"), i.$btnFile.append(i.$element)
        },
        createContainer: function() {
            var i = this,
                t = e(document.createElement("span")).attr({
                    "class": "file-input file-input-new"
                }).html(i.renderMain());
            return i.$element.before(t), i.initBrowse(t), t
        },
        refreshContainer: function() {
            var e = this,
                i = e.$container;
            i.before(e.$element), i.html(e.renderMain()), e.initBrowse(i)
        },
        renderMain: function() {
            var e = this,
                i = e.showPreview ? e.getLayoutTemplate("preview").replace(/\{class\}/g, e.previewClass) : "",
                t = e.isDisabled ? e.captionClass + " file-caption-disabled" : e.captionClass,
                n = e.captionTemplate.replace(/\{class\}/g, t + " kv-fileinput-caption");
            return e.mainTemplate.replace(/\{class\}/g, e.mainClass).replace(/\{preview\}/g, i).replace(/\{caption\}/g, n).replace(/\{upload\}/g, e.renderUpload()).replace(/\{remove\}/g, e.renderRemove()).replace(/\{browse\}/g, e.renderBrowse())
        },
        renderBrowse: function() {
            var e = this,
                i = e.browseClass + " btn-file",
                t = "";
            return e.isDisabled && (t = " disabled "), '<div class="' + i + '"' + t + "> " + e.browseIcon + e.browseLabel + " </div>"
        },
        renderRemove: function() {
            var e = this,
                i = e.removeClass + " fileinput-remove fileinput-remove-button",
                t = "";
            return e.showRemove ? (e.isDisabled && (t = " disabled "), '<button type="button" class="' + i + '"' + t + ">" + e.removeIcon + e.removeLabel + "</button>") : ""
        },
        renderUpload: function() {
            var e = this,
                i = e.uploadClass + " kv-fileinput-upload",
                t = "",
                n = "";
            return e.showUpload ? (e.isDisabled && (n = " disabled "), t = d(e.uploadUrl) || e.isDisabled ? '<button type="submit" class="' + i + '"' + n + ">" + e.uploadIcon + e.uploadLabel + "</button>" : '<a href="' + e.uploadUrl + '" class="' + i + '"' + n + ">" + e.uploadIcon + e.uploadLabel + "</a>") : ""
        }
    }, e.fn.fileinput = function(i) {
        if (f() || g(9)) {
            var t = Array.apply(null, arguments);
            return t.shift(), this.each(function() {
                var n = e(this),
                    a = n.data("fileinput"),
                    r = "object" == typeof i && i;
                a || n.data("fileinput", a = new b(this, e.extend({}, e.fn.fileinput.defaults, r, e(this).data()))), "string" == typeof i && a[i].apply(a, t)
            })
        }
    }, e.fn.fileinput.defaults = {
        showCaption: !0,
        showPreview: !0,
        showRemove: !0,
        showUpload: !0,
        autoFitCaption: !0,
        mainClass: "",
        previewClass: "",
        captionClass: "",
        mainTemplate: null,
        initialDelimiter: "*$$*",
        initialPreview: "",
        initialCaption: "",
        initialPreviewCount: 0,
        initialPreviewContent: "",
        overwriteInitial: !0,
        layoutTemplates: r,
        previewTemplates: o,
        allowedPreviewTypes: l,
        allowedPreviewMimeTypes: null,
        allowedFileTypes: null,
        allowedFileExtensions: null,
        previewSettings: s,
        fileTypeSettings: p,
        browseLabel: "Browse &hellip;",
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i> &nbsp;',
        browseClass: "btn btn-primary",
        removeLabel: "Remove",
        removeIcon: '<i class="glyphicon glyphicon-ban-circle"></i> ',
        removeClass: "btn btn-default",
        uploadLabel: "Upload",
        uploadIcon: '<i class="glyphicon glyphicon-upload"></i> ',
        uploadClass: "btn btn-default",
        uploadUrl: null,
        maxFileSize: 0,
        maxFileCount: 0,
        msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>. Please retry your upload!',
        msgFilesTooMany: "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>. Please retry your upload!",
        msgFileNotFound: 'File "{name}" not found!',
        msgFileNotReadable: 'File "{name}" is not readable.',
        msgFilePreviewAborted: 'File preview aborted for "{name}".',
        msgFilePreviewError: 'An error occurred while reading the file "{name}".',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
        msgValidationError: '<span class="text-danger"><i class="glyphicon glyphicon-exclamation-sign"></i> File Upload Error</span>',
        msgErrorClass: "file-error-message",
        msgLoading: "Loading  file {index} of {files} &hellip;",
        msgProgress: "Loading file {index} of {files} - {name} - {percent}% completed.",
        msgSelected: "{n} files selected",
        previewFileType: "image",
        wrapTextLength: 250,
        wrapIndicator: ' <span class="wrap-indicator" title="{title}" onclick="{dialog}">[&hellip;]</span>',
        elCaptionContainer: null,
        elCaptionText: null,
        elPreviewContainer: null,
        elPreviewImage: null,
        elPreviewStatus: null,
        elErrorContainer: null,
        slugCallback: null
    }, e(document).ready(function() {
        var i = e("input.file[type=file]"),
            t = null != i.attr("type") ? i.length : 0;
        t > 0 && i.fileinput()
    })
}(window.jQuery);
