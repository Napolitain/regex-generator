if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'regex-generator'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'regex-generator'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'regex-generator'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'regex-generator'.");
}this['regex-generator'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toString = Kotlin.toString;
  var Exception = Kotlin.kotlin.Exception;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var lastIndexOf = Kotlin.kotlin.text.lastIndexOf_l5u8uk$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var unboxChar = Kotlin.unboxChar;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var compareBy = Kotlin.kotlin.comparisons.compareBy_bvgy4j$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var minOrNull = Kotlin.kotlin.collections.minOrNull_exjks8$;
  var maxOrNull = Kotlin.kotlin.collections.maxOrNull_exjks8$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var RuntimeException_init_0 = Kotlin.kotlin.RuntimeException;
  var ClassCastException = Kotlin.kotlin.ClassCastException;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var clear = Kotlin.kotlinx.dom.clear_asww5s$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var addClass = Kotlin.kotlinx.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlinx.dom.removeClass_hhb33f$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var SPAN_init = $module$kotlinx_html_js.kotlinx.html.SPAN;
  var HTMLSpanElement_0 = HTMLSpanElement;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var DIV_init = $module$kotlinx_html_js.kotlinx.html.DIV;
  var HTMLDivElement_0 = HTMLDivElement;
  var attributesMapOf_0 = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_alerag$;
  var A_init = $module$kotlinx_html_js.kotlinx.html.A;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var JsMath = Math;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var P_init = $module$kotlinx_html_js.kotlinx.html.P;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var enumEncode = $module$kotlinx_html_js.kotlinx.html.attributes.enumEncode_m4whry$;
  var BUTTON_init = $module$kotlinx_html_js.kotlinx.html.BUTTON;
  var CODE_init = $module$kotlinx_html_js.kotlinx.html.CODE;
  var PRE_init = $module$kotlinx_html_js.kotlinx.html.PRE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var intersect = Kotlin.kotlin.collections.intersect_q4559j$;
  var then = Kotlin.kotlin.comparisons.then_15rrmw$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var ObservableProperty = Kotlin.kotlin.properties.ObservableProperty;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  UrlGenerator.prototype = Object.create(SimpleReplacingCodeGenerator.prototype);
  UrlGenerator.prototype.constructor = UrlGenerator;
  JavaCodeGenerator.prototype = Object.create(SimpleReplacingCodeGenerator.prototype);
  JavaCodeGenerator.prototype.constructor = JavaCodeGenerator;
  KotlinCodeGenerator.prototype = Object.create(SimpleReplacingCodeGenerator.prototype);
  KotlinCodeGenerator.prototype.constructor = KotlinCodeGenerator;
  PhpCodeGenerator.prototype = Object.create(SimpleReplacingCodeGenerator.prototype);
  PhpCodeGenerator.prototype.constructor = PhpCodeGenerator;
  JavaScriptCodeGenerator.prototype = Object.create(SimpleReplacingCodeGenerator.prototype);
  JavaScriptCodeGenerator.prototype.constructor = JavaScriptCodeGenerator;
  GrepCodeGenerator.prototype = Object.create(SimpleReplacingCodeGenerator.prototype);
  GrepCodeGenerator.prototype.constructor = GrepCodeGenerator;
  CSharpCodeGenerator.prototype = Object.create(SimpleReplacingCodeGenerator.prototype);
  CSharpCodeGenerator.prototype.constructor = CSharpCodeGenerator;
  RubyCodeGenerator.prototype = Object.create(SimpleReplacingCodeGenerator.prototype);
  RubyCodeGenerator.prototype.constructor = RubyCodeGenerator;
  function main() {
    try {
      initRegexGenerator();
    } catch (exception) {
      if (Kotlin.isType(exception, Exception)) {
        console.error(exception);
        window.alert('Unable to initialize RegexGenerator: ' + toString(exception.message));
      } else
        throw exception;
    }
  }
  function initRegexGenerator() {
    var presenter = new UiController();
    presenter.initialize();
    var showGuide = ApplicationSettings_getInstance().isNewUser();
    ApplicationSettings_getInstance().storeUserLastInfo();
    if (showGuide) {
      presenter.showInitialUserGuide();
    }}
  function StepDefinition(element, popover) {
    this.element = element;
    this.popover = popover;
  }
  StepDefinition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StepDefinition',
    interfaces: []
  };
  StepDefinition.prototype.component1 = function () {
    return this.element;
  };
  StepDefinition.prototype.component2 = function () {
    return this.popover;
  };
  StepDefinition.prototype.copy_8qir6w$ = function (element, popover) {
    return new StepDefinition(element === void 0 ? this.element : element, popover === void 0 ? this.popover : popover);
  };
  StepDefinition.prototype.toString = function () {
    return 'StepDefinition(element=' + Kotlin.toString(this.element) + (', popover=' + Kotlin.toString(this.popover)) + ')';
  };
  StepDefinition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.element) | 0;
    result = result * 31 + Kotlin.hashCode(this.popover) | 0;
    return result;
  };
  StepDefinition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.element, other.element) && Kotlin.equals(this.popover, other.popover)))));
  };
  function Popover(title, description, position) {
    this.title = title;
    this.description = description;
    this.position = position;
  }
  Popover.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Popover',
    interfaces: []
  };
  Popover.prototype.component1 = function () {
    return this.title;
  };
  Popover.prototype.component2 = function () {
    return this.description;
  };
  Popover.prototype.component3 = function () {
    return this.position;
  };
  Popover.prototype.copy_6hosri$ = function (title, description, position) {
    return new Popover(title === void 0 ? this.title : title, description === void 0 ? this.description : description, position === void 0 ? this.position : position);
  };
  Popover.prototype.toString = function () {
    return 'Popover(title=' + Kotlin.toString(this.title) + (', description=' + Kotlin.toString(this.description)) + (', position=' + Kotlin.toString(this.position)) + ')';
  };
  Popover.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    return result;
  };
  Popover.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.description, other.description) && Kotlin.equals(this.position, other.position)))));
  };
  function defineSteps($receiver, stepDefinitions) {
    var destination = ArrayList_init(collectionSizeOrDefault(stepDefinitions, 10));
    var tmp$;
    tmp$ = stepDefinitions.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item);
    }
    $receiver.defineSteps(copyToArray(destination));
  }
  function BracketedRecognizer(name, startPattern, centerPatterns, endPattern, searchPattern, startGroupIndex, endGroupIndex, description, active) {
    if (startGroupIndex === void 0)
      startGroupIndex = 1;
    if (endGroupIndex === void 0)
      endGroupIndex = 3;
    if (description === void 0)
      description = null;
    if (active === void 0)
      active = true;
    this.name_umq4d7$_0 = name;
    this.startPattern_0 = startPattern;
    this.centerPatterns_0 = centerPatterns;
    this.endPattern_0 = endPattern;
    this.searchPattern_0 = searchPattern;
    this.startGroupIndex_0 = startGroupIndex;
    this.endGroupIndex_0 = endGroupIndex;
    this.description_ffks6q$_0 = description;
    this.active_hu82o0$_0 = active;
    this.searchRegex_0 = RegexCache_getInstance().get_61zpoe$(this.searchPattern_0);
  }
  Object.defineProperty(BracketedRecognizer.prototype, 'name', {
    get: function () {
      return this.name_umq4d7$_0;
    }
  });
  Object.defineProperty(BracketedRecognizer.prototype, 'description', {
    get: function () {
      return this.description_ffks6q$_0;
    }
  });
  Object.defineProperty(BracketedRecognizer.prototype, 'active', {
    get: function () {
      return this.active_hu82o0$_0;
    }
  });
  BracketedRecognizer.prototype.findMatches_61zpoe$ = function (input) {
    var output = LinkedHashSet_init();
    var sizeBefore = 0;
    do {
      sizeBefore = output.size;
      var destination = ArrayList_init(collectionSizeOrDefault(output, 10));
      var tmp$;
      tmp$ = output.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.ranges.get_za3lpa$(0).first + 1 | 0);
      }
      var startIndices = destination.isEmpty() ? listOf(0) : destination;
      var tmp$_0;
      tmp$_0 = startIndices.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var $receiver = this.centerPatterns_0;
        var result = LinkedHashMap_init(coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16));
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          result.put_xwzc9p$(element_0, '(' + this.startPattern_0 + ')(' + element_0.pattern + ')(' + this.endPattern_0 + ')');
        }
        var destination_0 = LinkedHashMap_init(mapCapacity(result.size));
        var tmp$_2;
        tmp$_2 = result.entries.iterator();
        while (tmp$_2.hasNext()) {
          var element_1 = tmp$_2.next();
          destination_0.put_xwzc9p$(element_1.key, RegexCache_getInstance().get_61zpoe$(element_1.value));
        }
        var destination_1 = LinkedHashMap_init(mapCapacity(destination_0.size));
        var tmp$_3;
        tmp$_3 = destination_0.entries.iterator();
        while (tmp$_3.hasNext()) {
          var element_2 = tmp$_3.next();
          destination_1.put_xwzc9p$(element_2.key, toList(element_2.value.findAll_905azu$(input, element)));
        }
        var destination_2 = ArrayList_init_0();
        var tmp$_4;
        tmp$_4 = destination_1.entries.iterator();
        while (tmp$_4.hasNext()) {
          var element_3 = tmp$_4.next();
          var $receiver_0 = element_3.value;
          var destination_3 = ArrayList_init_0();
          var tmp$_5;
          tmp$_5 = $receiver_0.iterator();
          while (tmp$_5.hasNext()) {
            var element_4 = tmp$_5.next();
            var list = this.createRecognizerMatches_0(input, element_3.key, element_4);
            addAll(destination_3, list);
          }
          var list_0 = destination_3;
          addAll(destination_2, list_0);
        }
        output.addAll_brywnq$(destination_2);
      }
    }
     while (output.size !== sizeBefore);
    return output;
  };
  BracketedRecognizer.prototype.createRecognizerMatches_0 = function (input, centerPattern, result) {
    var tmp$, tmp$_0;
    tmp$ = result.groups.get_za3lpa$(this.startGroupIndex_0);
    if (tmp$ == null) {
      throw RuntimeException_init('start group cannot be found');
    }var startGroup = tmp$;
    tmp$_0 = result.groups.get_za3lpa$(this.endGroupIndex_0);
    if (tmp$_0 == null) {
      throw RuntimeException_init('end group cannot be found');
    }var endGroup = tmp$_0;
    var startIndex = this.getStartOfFirstGroup_0(input, result.range.first, startGroup.value);
    var endIndex = this.getEndOfLastGroup_0(input, result.range.last, endGroup.value);
    var startRange = new IntRange(startIndex, startIndex + startGroup.value.length - 1 | 0);
    var centerRange = new IntRange(startIndex + startGroup.value.length | 0, endIndex - 1 | 0);
    var endRange = new IntRange(endIndex, endIndex + endGroup.value.length - 1 | 0);
    var outerMatch = new RecognizerMatch(listOf_0([this.startPattern_0, this.endPattern_0]), listOf_0([startRange, endRange]), this, this.name);
    var $receiver = centerPattern.title;
    var innerMatch = new RecognizerMatch(listOf(centerPattern.pattern), listOf(centerRange), this, this.name + ' (' + ($receiver.length === 0 ? 'center part' : $receiver) + ')');
    return mutableListOf([outerMatch, innerMatch]);
  };
  BracketedRecognizer.prototype.getStartOfFirstGroup_0 = function (input, startIndex, group) {
    return indexOf(input, group, startIndex);
  };
  BracketedRecognizer.prototype.getEndOfLastGroup_0 = function (input, endIndex, group) {
    return lastIndexOf(input, group, endIndex);
  };
  function BracketedRecognizer$CenterPattern(title, pattern) {
    this.title = title;
    this.pattern = pattern;
  }
  BracketedRecognizer$CenterPattern.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CenterPattern',
    interfaces: []
  };
  BracketedRecognizer$CenterPattern.prototype.component1 = function () {
    return this.title;
  };
  BracketedRecognizer$CenterPattern.prototype.component2 = function () {
    return this.pattern;
  };
  BracketedRecognizer$CenterPattern.prototype.copy_puj7f4$ = function (title, pattern) {
    return new BracketedRecognizer$CenterPattern(title === void 0 ? this.title : title, pattern === void 0 ? this.pattern : pattern);
  };
  BracketedRecognizer$CenterPattern.prototype.toString = function () {
    return 'CenterPattern(title=' + Kotlin.toString(this.title) + (', pattern=' + Kotlin.toString(this.pattern)) + ')';
  };
  BracketedRecognizer$CenterPattern.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.pattern) | 0;
    return result;
  };
  BracketedRecognizer$CenterPattern.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.pattern, other.pattern)))));
  };
  BracketedRecognizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BracketedRecognizer',
    interfaces: [Recognizer]
  };
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function CodeGenerator() {
    CodeGenerator$Companion_getInstance();
  }
  function CodeGenerator$Companion() {
    CodeGenerator$Companion_instance = this;
    this.all = sortedWith(listOf_0([new JavaCodeGenerator(), new KotlinCodeGenerator(), new PhpCodeGenerator(), new JavaScriptCodeGenerator(), new CSharpCodeGenerator(), new RubyCodeGenerator(), new GrepCodeGenerator()]), new Comparator(compareBy$lambda(CodeGenerator$Companion$all$lambda)));
  }
  function CodeGenerator$Companion$all$lambda(it) {
    return it.languageName.toLowerCase();
  }
  CodeGenerator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CodeGenerator$Companion_instance = null;
  function CodeGenerator$Companion_getInstance() {
    if (CodeGenerator$Companion_instance === null) {
      new CodeGenerator$Companion();
    }return CodeGenerator$Companion_instance;
  }
  Object.defineProperty(CodeGenerator.prototype, 'uniqueName', {
    configurable: true,
    get: function () {
      return replace(replace(replace(this.languageName, '-', '_minus_'), '+', '_plus_'), '#', '_sharp_');
    }
  });
  function CodeGenerator$GeneratedSnippet(snippet, warnings) {
    if (warnings === void 0)
      warnings = emptyList();
    this.snippet = snippet;
    this.warnings = warnings;
  }
  CodeGenerator$GeneratedSnippet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeneratedSnippet',
    interfaces: []
  };
  CodeGenerator$GeneratedSnippet.prototype.component1 = function () {
    return this.snippet;
  };
  CodeGenerator$GeneratedSnippet.prototype.component2 = function () {
    return this.warnings;
  };
  CodeGenerator$GeneratedSnippet.prototype.copy_kwv3np$ = function (snippet, warnings) {
    return new CodeGenerator$GeneratedSnippet(snippet === void 0 ? this.snippet : snippet, warnings === void 0 ? this.warnings : warnings);
  };
  CodeGenerator$GeneratedSnippet.prototype.toString = function () {
    return 'GeneratedSnippet(snippet=' + Kotlin.toString(this.snippet) + (', warnings=' + Kotlin.toString(this.warnings)) + ')';
  };
  CodeGenerator$GeneratedSnippet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.snippet) | 0;
    result = result * 31 + Kotlin.hashCode(this.warnings) | 0;
    return result;
  };
  CodeGenerator$GeneratedSnippet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.snippet, other.snippet) && Kotlin.equals(this.warnings, other.warnings)))));
  };
  CodeGenerator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CodeGenerator',
    interfaces: []
  };
  function SimpleReplacingCodeGenerator(languageName, highlightLanguage, templateCode) {
    this.languageName_gnrhy9$_0 = languageName;
    this.highlightLanguage_g6a7r8$_0 = highlightLanguage;
    this.templateCode_0 = templateCode;
  }
  Object.defineProperty(SimpleReplacingCodeGenerator.prototype, 'languageName', {
    get: function () {
      return this.languageName_gnrhy9$_0;
    }
  });
  Object.defineProperty(SimpleReplacingCodeGenerator.prototype, 'highlightLanguage', {
    get: function () {
      return this.highlightLanguage_g6a7r8$_0;
    }
  });
  SimpleReplacingCodeGenerator.prototype.transformPattern_wa467u$ = function (pattern, options) {
    return pattern;
  };
  SimpleReplacingCodeGenerator.prototype.getWarnings_wa467u$ = function (pattern, options) {
    return emptyList();
  };
  SimpleReplacingCodeGenerator.prototype.generateCode_wa467u$ = function (pattern, options) {
    return new CodeGenerator$GeneratedSnippet(replace(replace(replace(this.templateCode_0, '%1$s', this.transformPattern_wa467u$(pattern, options)), '%2$s', this.generateOptionsCode_ow7xd4$(options)), '%3$s', pattern), this.getWarnings_wa467u$(pattern, options));
  };
  function SimpleReplacingCodeGenerator$combineOptions$lambda(closure$mapper) {
    return function (s) {
      return closure$mapper(s);
    };
  }
  SimpleReplacingCodeGenerator.prototype.combineOptions_1rvtm9$$default = function (options, valueForCaseInsensitive, valueForMultiline, valueForDotAll, valueIfNone, prefix, separator, postfix, mapper) {
    var optionList = ArrayList_init_0();
    if (options.caseSensitive && valueForCaseInsensitive != null) {
      optionList.add_11rb$(valueForCaseInsensitive);
    }if (options.dotMatchesLineBreaks && valueForDotAll != null) {
      optionList.add_11rb$(valueForDotAll);
    }if (options.multiline && valueForMultiline != null) {
      optionList.add_11rb$(valueForMultiline);
    }if (optionList.isEmpty()) {
      return valueIfNone;
    }return joinToString(optionList, separator, prefix, postfix, void 0, void 0, SimpleReplacingCodeGenerator$combineOptions$lambda(mapper));
  };
  function SimpleReplacingCodeGenerator$combineOptions$lambda_0(s) {
    return s;
  }
  SimpleReplacingCodeGenerator.prototype.combineOptions_1rvtm9$ = function (options, valueForCaseInsensitive, valueForMultiline, valueForDotAll, valueIfNone, prefix, separator, postfix, mapper, callback$default) {
    if (valueForCaseInsensitive === void 0)
      valueForCaseInsensitive = null;
    if (valueForMultiline === void 0)
      valueForMultiline = null;
    if (valueForDotAll === void 0)
      valueForDotAll = null;
    if (valueIfNone === void 0)
      valueIfNone = '';
    if (prefix === void 0)
      prefix = '';
    if (separator === void 0)
      separator = '';
    if (postfix === void 0)
      postfix = '';
    if (mapper === void 0)
      mapper = SimpleReplacingCodeGenerator$combineOptions$lambda_0;
    return callback$default ? callback$default(options, valueForCaseInsensitive, valueForMultiline, valueForDotAll, valueIfNone, prefix, separator, postfix, mapper) : this.combineOptions_1rvtm9$$default(options, valueForCaseInsensitive, valueForMultiline, valueForDotAll, valueIfNone, prefix, separator, postfix, mapper);
  };
  SimpleReplacingCodeGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleReplacingCodeGenerator',
    interfaces: [CodeGenerator]
  };
  function UrlGenerator(linkName, urlTemplate, valueForCaseInsensitive, valueForDotAll, valueForMultiline, additionCharactersToEscape) {
    if (valueForCaseInsensitive === void 0)
      valueForCaseInsensitive = 'i';
    if (valueForDotAll === void 0)
      valueForDotAll = 's';
    if (valueForMultiline === void 0)
      valueForMultiline = 'm';
    if (additionCharactersToEscape === void 0)
      additionCharactersToEscape = emptyList();
    SimpleReplacingCodeGenerator.call(this, linkName, linkName, urlTemplate);
    this.valueForCaseInsensitive_0 = valueForCaseInsensitive;
    this.valueForDotAll_0 = valueForDotAll;
    this.valueForMultiline_0 = valueForMultiline;
    this.additionCharactersToEscape_0 = additionCharactersToEscape;
  }
  UrlGenerator.prototype.escape_0 = function ($receiver, chars) {
    return chars.isEmpty() ? $receiver : this.escape_0(replace($receiver, String.fromCharCode(unboxChar(first(chars))), '\\' + String.fromCharCode(unboxChar(first(chars)))), drop(chars, 1));
  };
  UrlGenerator.prototype.transformPattern_wa467u$ = function (pattern, options) {
    return encodeURIComponent(this.escape_0(pattern, this.additionCharactersToEscape_0));
  };
  UrlGenerator.prototype.generateOptionsCode_ow7xd4$ = function (options) {
    return this.combineOptions_1rvtm9$(options, this.valueForCaseInsensitive_0, this.valueForMultiline_0, this.valueForDotAll_0);
  };
  UrlGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UrlGenerator',
    interfaces: [SimpleReplacingCodeGenerator]
  };
  function JavaCodeGenerator() {
    SimpleReplacingCodeGenerator.call(this, 'Java', 'java', trimMargin('import java.util.regex.Pattern;\n                |import java.util.regex.Matcher;\n                |\n                |public class Sample {\n                |    public boolean useRegex(String input) {\n                |        // Compile regular expression\n                |        Pattern pattern = Pattern.compile("%1$s"%2$s);\n                |        // Match regex against input\n                |        Matcher matcher = pattern.matcher(input);\n                |        // Use results...\n                |        return matcher.matches();\n                |    }\n                |}'));
  }
  JavaCodeGenerator.prototype.transformPattern_wa467u$ = function (pattern, options) {
    var $receiver = RegexCache_getInstance().get_61zpoe$('([\\\\"])').replace_x2uqeu$(pattern, '\\$1');
    return RegexCache_getInstance().get_61zpoe$('\t').replace_x2uqeu$($receiver, '\\t');
  };
  function JavaCodeGenerator$generateOptionsCode$lambda(it) {
    return 'Pattern.' + it;
  }
  JavaCodeGenerator.prototype.generateOptionsCode_ow7xd4$ = function (options) {
    return this.combineOptions_1rvtm9$(options, 'CASE_INSENSITIVE', 'MULTILINE', 'DOTALL', void 0, ' ,', ' | ', void 0, JavaCodeGenerator$generateOptionsCode$lambda);
  };
  JavaCodeGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JavaCodeGenerator',
    interfaces: [SimpleReplacingCodeGenerator]
  };
  function KotlinCodeGenerator() {
    SimpleReplacingCodeGenerator.call(this, 'Kotlin', 'kotlin', 'fun useRegex(input: String): Boolean {\n    val regex = Regex(pattern = "%1$s"%2$s)\n    return regex.matches(input)\n}');
  }
  KotlinCodeGenerator.prototype.transformPattern_wa467u$ = function (pattern, options) {
    var $receiver = RegexCache_getInstance().get_61zpoe$('([\\\\"])').replace_x2uqeu$(pattern, '\\$1');
    return RegexCache_getInstance().get_61zpoe$('\t').replace_x2uqeu$($receiver, '\\t');
  };
  function KotlinCodeGenerator$generateOptionsCode$lambda(it) {
    return 'RegexOption.' + it;
  }
  KotlinCodeGenerator.prototype.generateOptionsCode_ow7xd4$ = function (options) {
    return this.combineOptions_1rvtm9$(options, 'IGNORE_CASE', 'MULTILINE', 'DOT_MATCHES_ALL', void 0, ', options = setOf(', ', ', ')', KotlinCodeGenerator$generateOptionsCode$lambda);
  };
  KotlinCodeGenerator.prototype.getWarnings_wa467u$ = function (pattern, options) {
    if (options.dotMatchesLineBreaks)
      return listOf("The option 'RegexOption.DOT_MATCHES_ALL' is only supported on JVM runtime.");
    return emptyList();
  };
  KotlinCodeGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KotlinCodeGenerator',
    interfaces: [SimpleReplacingCodeGenerator]
  };
  function PhpCodeGenerator() {
    SimpleReplacingCodeGenerator.call(this, 'PHP', 'php', "<?php\nfunction useRegex($input) {\n    $regex = '/%1$s/%2$s';\n    return preg_match($regex, $input);\n}\n?>");
  }
  PhpCodeGenerator.prototype.transformPattern_wa467u$ = function (pattern, options) {
    var $receiver = RegexCache_getInstance().get_61zpoe$("([\\\\'])").replace_x2uqeu$(pattern, '\\$1');
    return RegexCache_getInstance().get_61zpoe$('\t').replace_x2uqeu$($receiver, '\\t');
  };
  PhpCodeGenerator.prototype.generateOptionsCode_ow7xd4$ = function (options) {
    return this.combineOptions_1rvtm9$(options, 'i', 'm', 's');
  };
  PhpCodeGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PhpCodeGenerator',
    interfaces: [SimpleReplacingCodeGenerator]
  };
  function JavaScriptCodeGenerator() {
    SimpleReplacingCodeGenerator.call(this, 'JavaScript', 'javascript', 'function useRegex(input) {\n    let regex = /%1$s/%2$s;\n    return regex.test(input);\n}');
  }
  JavaScriptCodeGenerator.prototype.transformPattern_wa467u$ = function (pattern, options) {
    return replace(pattern, '\t', '\\t');
  };
  JavaScriptCodeGenerator.prototype.generateOptionsCode_ow7xd4$ = function (options) {
    return this.combineOptions_1rvtm9$(options, 'i', 'm', 's');
  };
  JavaScriptCodeGenerator.prototype.getWarnings_wa467u$ = function (pattern, options) {
    if (options.dotMatchesLineBreaks)
      return listOf("The option 's' (dot matches line breaks) is not supported in Firefox and IE.");
    return emptyList();
  };
  JavaScriptCodeGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JavaScriptCodeGenerator',
    interfaces: [SimpleReplacingCodeGenerator]
  };
  function GrepCodeGenerator() {
    SimpleReplacingCodeGenerator.call(this, 'grep', 'bash', "grep -P%2$s '%1$s' [FILE...]");
  }
  GrepCodeGenerator.prototype.transformPattern_wa467u$ = function (pattern, options) {
    return replace(pattern, "'", "'\"'\"'");
  };
  GrepCodeGenerator.prototype.generateOptionsCode_ow7xd4$ = function (options) {
    return this.combineOptions_1rvtm9$(options, '-i', void 0, void 0, void 0, ' ', ' ');
  };
  GrepCodeGenerator.prototype.getWarnings_wa467u$ = function (pattern, options) {
    var messages = ArrayList_init_0();
    if (options.dotMatchesLineBreaks)
      messages.add_11rb$("The option 's' (dot matches line breaks) is not supported for grep.");
    if (options.multiline)
      messages.add_11rb$("The option 'm' (multiline) is not supported for grep.");
    messages.add_11rb$('grep on mac OS does not support option -P (for Perl regex). To make it work, install a better grep (e.g. brew install grep). Most regex will work without -P.');
    return messages;
  };
  GrepCodeGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GrepCodeGenerator',
    interfaces: [SimpleReplacingCodeGenerator]
  };
  function CSharpCodeGenerator() {
    SimpleReplacingCodeGenerator.call(this, 'C#', 'csharp', 'using System;\nusing System.Text.RegularExpressions;\n\npublic class Sample\n{\n    public static void useRegex(String input)\n    {\n        Regex regex = new Regex("%1$s"%2$s);\n        return regex.IsMatch(input);\n    }\n}');
  }
  CSharpCodeGenerator.prototype.transformPattern_wa467u$ = function (pattern, options) {
    var $receiver = RegexCache_getInstance().get_61zpoe$('([\\\\"])').replace_x2uqeu$(pattern, '\\$1');
    return RegexCache_getInstance().get_61zpoe$('\t').replace_x2uqeu$($receiver, '\\t');
  };
  function CSharpCodeGenerator$generateOptionsCode$lambda(it) {
    return 'RegexOptions.' + it;
  }
  CSharpCodeGenerator.prototype.generateOptionsCode_ow7xd4$ = function (options) {
    return this.combineOptions_1rvtm9$(options, 'IgnoreCase', 'Multiline', 'Singleline', void 0, ', ', ' | ', void 0, CSharpCodeGenerator$generateOptionsCode$lambda);
  };
  CSharpCodeGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CSharpCodeGenerator',
    interfaces: [SimpleReplacingCodeGenerator]
  };
  function RubyCodeGenerator() {
    SimpleReplacingCodeGenerator.call(this, 'Ruby', 'ruby', "def use_regex(input)\n    regex = Regexp.new('%1$s'%2$s)\n    regex.match input\nend");
  }
  RubyCodeGenerator.prototype.transformPattern_wa467u$ = function (pattern, options) {
    var $receiver = RegexCache_getInstance().get_61zpoe$("([\\\\'])").replace_x2uqeu$(pattern, '\\$1');
    return RegexCache_getInstance().get_61zpoe$('\t').replace_x2uqeu$($receiver, '\\t');
  };
  function RubyCodeGenerator$generateOptionsCode$lambda(it) {
    return 'Regexp::' + it;
  }
  RubyCodeGenerator.prototype.generateOptionsCode_ow7xd4$ = function (options) {
    return this.combineOptions_1rvtm9$(options, 'IGNORECASE', void 0, 'MULTILINE', void 0, ', ', ' | ', void 0, RubyCodeGenerator$generateOptionsCode$lambda);
  };
  RubyCodeGenerator.prototype.getWarnings_wa467u$ = function (pattern, options) {
    var warnings = ArrayList_init_0();
    if (options.multiline) {
      var element = "The Ruby regex engine does not support the MULTILINE option. Regex' are always treated as multiline.";
      warnings.add_11rb$(element);
    }if (options.dotMatchesLineBreaks) {
      var element_0 = 'In Ruby, the DOTALL modifier equivalent is m, Regexp::MULTILINE modifier.';
      warnings.add_11rb$(element_0);
    }return warnings;
  };
  RubyCodeGenerator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RubyCodeGenerator',
    interfaces: [SimpleReplacingCodeGenerator]
  };
  function EchoRecognizer(name, pattern, description, active, priority) {
    if (description === void 0)
      description = null;
    if (active === void 0)
      active = true;
    if (priority === void 0)
      priority = 0;
    this.name_teppz9$_0 = name;
    this.pattern_0 = pattern;
    this.description_ou5s0i$_0 = description;
    this.active_vufh28$_0 = active;
    this.priority_0 = priority;
  }
  Object.defineProperty(EchoRecognizer.prototype, 'name', {
    get: function () {
      return this.name_teppz9$_0;
    }
  });
  Object.defineProperty(EchoRecognizer.prototype, 'description', {
    get: function () {
      return this.description_ou5s0i$_0;
    }
  });
  Object.defineProperty(EchoRecognizer.prototype, 'active', {
    get: function () {
      return this.active_vufh28$_0;
    }
  });
  function EchoRecognizer$findMatches$lambda(this$EchoRecognizer) {
    return function (result) {
      return new RecognizerMatch(listOf(PatternHelper_getInstance().escapeForRegex_61zpoe$(result.value)), listOf(result.range), this$EchoRecognizer, this$EchoRecognizer.name + ' (' + result.value + ')', this$EchoRecognizer.priority_0);
    };
  }
  EchoRecognizer.prototype.findMatches_61zpoe$ = function (input) {
    return toList(map(RegexCache_getInstance().get_61zpoe$(this.pattern_0).findAll_905azu$(input), EchoRecognizer$findMatches$lambda(this)));
  };
  EchoRecognizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EchoRecognizer',
    interfaces: [Recognizer]
  };
  function PatternHelper() {
    PatternHelper_instance = this;
  }
  PatternHelper.prototype.escapeForRegex_61zpoe$ = function (input) {
    return RegexCache_getInstance().get_61zpoe$('([.\\\\^$\\[{}()*?+])').replace_x2uqeu$(input, '\\$1');
  };
  PatternHelper.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PatternHelper',
    interfaces: []
  };
  var PatternHelper_instance = null;
  function PatternHelper_getInstance() {
    if (PatternHelper_instance === null) {
      new PatternHelper();
    }return PatternHelper_instance;
  }
  function Recognizer() {
  }
  Recognizer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Recognizer',
    interfaces: []
  };
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function RecognizerCombiner() {
    RecognizerCombiner$Companion_getInstance();
  }
  function RecognizerCombiner$Companion() {
    RecognizerCombiner$Companion_instance = this;
  }
  function RecognizerCombiner$Companion$combine$lambda(it) {
    return it.range.first;
  }
  function RecognizerCombiner$Companion$combine$makeOutput(hasLength, options, outputProvider) {
    if (hasLength && options.onlyPatterns && options.matchWholeLine)
      return '.*';
    else if (hasLength && !options.onlyPatterns)
      return outputProvider();
    else
      return '';
  }
  function RecognizerCombiner$Companion$combine$lambda_0(closure$inputText, closure$rangesToMatches, this$RecognizerCombiner$) {
    return function () {
      var tmp$ = this$RecognizerCombiner$;
      var $receiver = closure$inputText;
      var endIndex = first(closure$rangesToMatches).range.first;
      return tmp$.escapeForRegex_0($receiver.substring(0, endIndex));
    };
  }
  function RecognizerCombiner$Companion$combine$lambda_1(closure$inputText, closure$rangesToMatches, this$RecognizerCombiner$) {
    return function () {
      var tmp$ = this$RecognizerCombiner$;
      var $receiver = closure$inputText;
      var startIndex = last(closure$rangesToMatches).range.last + 1 | 0;
      return tmp$.escapeForRegex_0($receiver.substring(startIndex));
    };
  }
  RecognizerCombiner$Companion.prototype.combine_9yx9zl$ = function (inputText, selectedMatches, options) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = selectedMatches.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver = element.ranges;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0, tmp$_0_0;
      var index = 0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(new RecognizerCombiner$RangeToMatch(item, element.patterns.get_za3lpa$(checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0)))));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    var rangesToMatches = toList_0(sortedWith(destination, new Comparator(compareBy$lambda_0(RecognizerCombiner$Companion$combine$lambda))));
    var makeOutput = RecognizerCombiner$Companion$combine$makeOutput;
    var first_0 = makeOutput(!rangesToMatches.isEmpty() && first(rangesToMatches).range.first > 0, options, RecognizerCombiner$Companion$combine$lambda_0(inputText, rangesToMatches, this));
    var last_0 = makeOutput(!rangesToMatches.isEmpty() && last(rangesToMatches).range.last < (inputText.length - 1 | 0), options, RecognizerCombiner$Companion$combine$lambda_1(inputText, rangesToMatches, this));
    var $receiver_0 = StringBuilder_init();
    $receiver_0.append_pdl1vj$(first_0);
    if (rangesToMatches.isEmpty()) {
      var tmp$_1;
      if (options.onlyPatterns) {
        tmp$_1 = '.*';
      } else {
        tmp$_1 = this.escapeForRegex_0(inputText);
      }
      $receiver_0.append_pdl1vj$(tmp$_1);
    }for (var i = 0; i !== rangesToMatches.size; ++i) {
      var tmp$_2;
      if (i > 0) {
        var range = new IntRange(rangesToMatches.get_za3lpa$(i - 1 | 0).range.last + 1 | 0, rangesToMatches.get_za3lpa$(i).range.first - 1 | 0);
        if (options.onlyPatterns) {
          if (range.isEmpty()) {
            tmp$_2 = '';
          } else {
            tmp$_2 = '.*';
          }
          $receiver_0.append_pdl1vj$(tmp$_2);
        } else {
          $receiver_0.append_pdl1vj$(this.escapeForRegex_0(substring(inputText, range)));
        }
      }$receiver_0.append_pdl1vj$(rangesToMatches.get_za3lpa$(i).pattern);
    }
    $receiver_0.append_pdl1vj$(last_0);
    var pattern = $receiver_0.toString();
    return new RecognizerCombiner$RegularExpression(options.getFrame_8be2vx$().format_y4putb$(pattern));
  };
  RecognizerCombiner$Companion.prototype.escapeForRegex_0 = function ($receiver) {
    return PatternHelper_getInstance().escapeForRegex_61zpoe$($receiver);
  };
  RecognizerCombiner$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RecognizerCombiner$Companion_instance = null;
  function RecognizerCombiner$Companion_getInstance() {
    if (RecognizerCombiner$Companion_instance === null) {
      new RecognizerCombiner$Companion();
    }return RecognizerCombiner$Companion_instance;
  }
  function RecognizerCombiner$Options(onlyPatterns, matchWholeLine, caseSensitive, dotMatchesLineBreaks, multiline) {
    if (onlyPatterns === void 0)
      onlyPatterns = false;
    if (matchWholeLine === void 0)
      matchWholeLine = true;
    if (caseSensitive === void 0)
      caseSensitive = true;
    if (dotMatchesLineBreaks === void 0)
      dotMatchesLineBreaks = false;
    if (multiline === void 0)
      multiline = false;
    this.onlyPatterns = onlyPatterns;
    this.matchWholeLine = matchWholeLine;
    this.caseSensitive = caseSensitive;
    this.dotMatchesLineBreaks = dotMatchesLineBreaks;
    this.multiline = multiline;
  }
  RecognizerCombiner$Options.prototype.getFrame_8be2vx$ = function () {
    if (this.matchWholeLine) {
      return new RecognizerCombiner$Frame('^', '$');
    } else {
      return new RecognizerCombiner$Frame('', '');
    }
  };
  RecognizerCombiner$Options.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Options',
    interfaces: []
  };
  RecognizerCombiner$Options.prototype.component1 = function () {
    return this.onlyPatterns;
  };
  RecognizerCombiner$Options.prototype.component2 = function () {
    return this.matchWholeLine;
  };
  RecognizerCombiner$Options.prototype.component3 = function () {
    return this.caseSensitive;
  };
  RecognizerCombiner$Options.prototype.component4 = function () {
    return this.dotMatchesLineBreaks;
  };
  RecognizerCombiner$Options.prototype.component5 = function () {
    return this.multiline;
  };
  RecognizerCombiner$Options.prototype.copy_yys257$ = function (onlyPatterns, matchWholeLine, caseSensitive, dotMatchesLineBreaks, multiline) {
    return new RecognizerCombiner$Options(onlyPatterns === void 0 ? this.onlyPatterns : onlyPatterns, matchWholeLine === void 0 ? this.matchWholeLine : matchWholeLine, caseSensitive === void 0 ? this.caseSensitive : caseSensitive, dotMatchesLineBreaks === void 0 ? this.dotMatchesLineBreaks : dotMatchesLineBreaks, multiline === void 0 ? this.multiline : multiline);
  };
  RecognizerCombiner$Options.prototype.toString = function () {
    return 'Options(onlyPatterns=' + Kotlin.toString(this.onlyPatterns) + (', matchWholeLine=' + Kotlin.toString(this.matchWholeLine)) + (', caseSensitive=' + Kotlin.toString(this.caseSensitive)) + (', dotMatchesLineBreaks=' + Kotlin.toString(this.dotMatchesLineBreaks)) + (', multiline=' + Kotlin.toString(this.multiline)) + ')';
  };
  RecognizerCombiner$Options.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.onlyPatterns) | 0;
    result = result * 31 + Kotlin.hashCode(this.matchWholeLine) | 0;
    result = result * 31 + Kotlin.hashCode(this.caseSensitive) | 0;
    result = result * 31 + Kotlin.hashCode(this.dotMatchesLineBreaks) | 0;
    result = result * 31 + Kotlin.hashCode(this.multiline) | 0;
    return result;
  };
  RecognizerCombiner$Options.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.onlyPatterns, other.onlyPatterns) && Kotlin.equals(this.matchWholeLine, other.matchWholeLine) && Kotlin.equals(this.caseSensitive, other.caseSensitive) && Kotlin.equals(this.dotMatchesLineBreaks, other.dotMatchesLineBreaks) && Kotlin.equals(this.multiline, other.multiline)))));
  };
  function RecognizerCombiner$RangeToMatch(range, pattern) {
    this.range = range;
    this.pattern = pattern;
  }
  RecognizerCombiner$RangeToMatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RangeToMatch',
    interfaces: []
  };
  RecognizerCombiner$RangeToMatch.prototype.component1 = function () {
    return this.range;
  };
  RecognizerCombiner$RangeToMatch.prototype.component2 = function () {
    return this.pattern;
  };
  RecognizerCombiner$RangeToMatch.prototype.copy_zcje8l$ = function (range, pattern) {
    return new RecognizerCombiner$RangeToMatch(range === void 0 ? this.range : range, pattern === void 0 ? this.pattern : pattern);
  };
  RecognizerCombiner$RangeToMatch.prototype.toString = function () {
    return 'RangeToMatch(range=' + Kotlin.toString(this.range) + (', pattern=' + Kotlin.toString(this.pattern)) + ')';
  };
  RecognizerCombiner$RangeToMatch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    result = result * 31 + Kotlin.hashCode(this.pattern) | 0;
    return result;
  };
  RecognizerCombiner$RangeToMatch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.range, other.range) && Kotlin.equals(this.pattern, other.pattern)))));
  };
  function RecognizerCombiner$Frame(start, end) {
    this.start = start;
    this.end = end;
  }
  RecognizerCombiner$Frame.prototype.format_y4putb$ = function (pattern) {
    return this.start + pattern + this.end;
  };
  RecognizerCombiner$Frame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Frame',
    interfaces: []
  };
  RecognizerCombiner$Frame.prototype.component1 = function () {
    return this.start;
  };
  RecognizerCombiner$Frame.prototype.component2 = function () {
    return this.end;
  };
  RecognizerCombiner$Frame.prototype.copy_puj7f4$ = function (start, end) {
    return new RecognizerCombiner$Frame(start === void 0 ? this.start : start, end === void 0 ? this.end : end);
  };
  RecognizerCombiner$Frame.prototype.toString = function () {
    return 'Frame(start=' + Kotlin.toString(this.start) + (', end=' + Kotlin.toString(this.end)) + ')';
  };
  RecognizerCombiner$Frame.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    return result;
  };
  RecognizerCombiner$Frame.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.end, other.end)))));
  };
  function RecognizerCombiner$RegularExpression(pattern) {
    this.pattern = pattern;
  }
  RecognizerCombiner$RegularExpression.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegularExpression',
    interfaces: []
  };
  RecognizerCombiner$RegularExpression.prototype.component1 = function () {
    return this.pattern;
  };
  RecognizerCombiner$RegularExpression.prototype.copy_61zpoe$ = function (pattern) {
    return new RecognizerCombiner$RegularExpression(pattern === void 0 ? this.pattern : pattern);
  };
  RecognizerCombiner$RegularExpression.prototype.toString = function () {
    return 'RegularExpression(pattern=' + Kotlin.toString(this.pattern) + ')';
  };
  RecognizerCombiner$RegularExpression.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pattern) | 0;
    return result;
  };
  RecognizerCombiner$RegularExpression.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.pattern, other.pattern))));
  };
  RecognizerCombiner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecognizerCombiner',
    interfaces: []
  };
  function RecognizerMatch(patterns, ranges, recognizer, title, priority) {
    if (priority === void 0)
      priority = 0;
    this.patterns = patterns;
    this.recognizer = recognizer;
    this.title = title;
    this.priority = priority;
    this.ranges = null;
    this.first_d0jdhk$_0 = 0;
    this.last_gjomxy$_0 = 0;
    this.length_7nbd0q$_0 = 0;
    if (ranges.isEmpty()) {
      throw IllegalArgumentException_init('RecognizerMatch without ranges is not allowed.');
    }if (ranges.size !== this.patterns.size) {
      throw IllegalArgumentException_init('You must provide an equal amount of ranges and patterns');
    }this.ranges = sortedWith(ranges, compareBy([RecognizerMatch_init$lambda, RecognizerMatch_init$lambda_0]));
    this.first_d0jdhk$_0 = this.ranges.get_za3lpa$(0).first;
    this.last_gjomxy$_0 = this.ranges.get_za3lpa$(this.ranges.size - 1 | 0).last;
    this.length_7nbd0q$_0 = this.last - this.first + 1 | 0;
  }
  Object.defineProperty(RecognizerMatch.prototype, 'first', {
    configurable: true,
    get: function () {
      return this.first_d0jdhk$_0;
    }
  });
  Object.defineProperty(RecognizerMatch.prototype, 'last', {
    configurable: true,
    get: function () {
      return this.last_gjomxy$_0;
    }
  });
  Object.defineProperty(RecognizerMatch.prototype, 'length', {
    configurable: true,
    get: function () {
      return this.length_7nbd0q$_0;
    }
  });
  RecognizerMatch.prototype.hasSameRangesAs_hdji9c$ = function (other) {
    if (this.ranges.size !== other.ranges.size) {
      return false;
    }var $receiver = this.ranges;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      tmp$_1.call(destination, item != null ? item.equals(other.ranges.get_za3lpa$(index_0)) : null);
    }
    var all$result;
    all$break: do {
      var tmp$_2;
      if (Kotlin.isType(destination, Collection) && destination.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$_2 = destination.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (!element) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  RecognizerMatch.prototype.equals = function (other) {
    return Kotlin.isType(other, RecognizerMatch) && equals(this.recognizer, other.recognizer) && this.hasSameRangesAs_hdji9c$(other);
  };
  RecognizerMatch.prototype.hashCode = function () {
    var result = hashCode(this.recognizer);
    result = (31 * result | 0) + hashCode(this.patterns) | 0;
    result = (31 * result | 0) + hashCode(this.title) | 0;
    result = (31 * result | 0) + hashCode(this.ranges) | 0;
    result = (31 * result | 0) + this.first | 0;
    result = (31 * result | 0) + this.last | 0;
    result = (31 * result | 0) + this.length | 0;
    return result;
  };
  function RecognizerMatch_init$lambda(it) {
    return it.first;
  }
  function RecognizerMatch_init$lambda_0(it) {
    return it.last;
  }
  RecognizerMatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecognizerMatch',
    interfaces: [HasRange]
  };
  function RecognizerRegistry() {
    RecognizerRegistry_instance = this;
    this.recognizers_0 = listOf_0([new EchoRecognizer('Character', '.', void 0, void 0, 1), new SimpleRecognizer('One whitespace', '\\s'), new SimpleRecognizer('Whitespaces', '\\s+'), new SimpleRecognizer('One character', '[a-zA-Z]'), new SimpleRecognizer('Multiple characters', '[a-zA-Z]+'), new SimpleRecognizer('Digit', '\\d'), new SimpleRecognizer('Number', '[0-9]+'), new SimpleRecognizer('Decimal number', '[0-9]*\\.[0-9]+'), new SimpleRecognizer('Floating point number (with optional exponent)', '([+-]?(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*))(?:[eE]([+-]?\\d+))?'), new SimpleRecognizer('URL encoded character', '%[0-9A-Fa-f][0-9A-Fa-f]'), new SimpleRecognizer('Day', '(0?[1-9]|[12][0-9]|3[01])', void 0, void 0, '(?:^|\\D)(%s)($|\\D)'), new SimpleRecognizer('Month', '(0?[1-9]|[1][0-2])', void 0, void 0, '(?:^|\\D)(%s)($|\\D)'), new SimpleRecognizer('Hour', '(0?[0-9]|1[0-9]|2[0-3])', void 0, void 0, '(?:^|\\D)(%s)($|\\D)'), new SimpleRecognizer('Minute/ Second', '(0?[0-9]|[1-5][0-9])', void 0, void 0, '(?:^|\\D)(%s)($|\\D)'), new SimpleRecognizer('Date', '[0-9]{4}-[0-9]{2}-[0-9]{2}'), new SimpleRecognizer('Time', '[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]{1,3})?'), new SimpleRecognizer('ISO8601', '[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?([zZ]|([\\+-])([01]\\d|2[0-3]):?([0-5]\\d)?)?'), new SimpleRecognizer('RFC2822 e-mail', "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"), new SimpleRecognizer('IPv4 address', '\\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\\b'), new SimpleRecognizer('Hashtag', "\\B#([a-z0-9]{2,})(?![~!@#$%^&*()=+_`\\-\\|\\/'\\[\\]\\{\\}]|[?.,]*\\w)"), new SimpleRecognizer('Simple CSS Color', '#(?:[a-f\\d]{3}){1,2}\\b'), new SimpleRecognizer('Log level', '(TRACE|DEBUG|INFO|NOTICE|WARN|ERROR|SEVERE|FATAL)'), new BracketedRecognizer('Round brackets', '\\(', listOf(new BracketedRecognizer$CenterPattern('no round bracket', '[^)]*')), '\\)', '(\\()([^)]*)(\\))'), new BracketedRecognizer('Square brackets', '\\[', listOf(new BracketedRecognizer$CenterPattern('no square bracket', '[^\\]]*')), '\\]', '(\\[)([^\\]]*)(\\])'), new BracketedRecognizer('Curly braces', '\\{', listOf(new BracketedRecognizer$CenterPattern('no curly braces', '[^}]*')), '\\}', '(\\{)([^}]*)(\\})'), new BracketedRecognizer('String (quotation mark)', '"', listOf_0([new BracketedRecognizer$CenterPattern('no quotation mark', '[^"]*'), new BracketedRecognizer$CenterPattern('escaped quotation mark', '(?:[^\\\\"]|\\\\\\\\|\\\\")*')]), '"', '(")([^"]*)(")'), new BracketedRecognizer('String (apostrophe)', "'", listOf_0([new BracketedRecognizer$CenterPattern('no apostrophe', "[^']*"), new BracketedRecognizer$CenterPattern('escaped apostrophe', "(?:[^\\\\']|\\\\\\\\|\\\\')*")]), "'", "(')([^']*)(')")]);
  }
  RecognizerRegistry.prototype.findMatches_61zpoe$ = function (input) {
    var $receiver = this.recognizers_0;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.active)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var list = element_0.findMatches_61zpoe$(input);
      addAll(destination_0, list);
    }
    var matches = toMutableList(sortedWith(destination_0, HasRange$Companion_getInstance().byPosition));
    var $receiver_0 = this.findRepetitions_0(matches);
    var destination_1 = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      var list_0 = element_1.findMatches_61zpoe$(input);
      addAll(destination_1, list_0);
    }
    matches.addAll_brywnq$(destination_1);
    return matches;
  };
  RecognizerRegistry.prototype.findRepetitions_0 = function (allMatches) {
    var destination = LinkedHashMap_init_0();
    var tmp$;
    tmp$ = allMatches.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.recognizer;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      } else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var $receiver = destination.values;
    var destination_0 = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var list_0 = this.findRepetitionsPerGroup_0(allMatches, element_0);
      addAll(destination_0, list_0);
    }
    return toSet(destination_0);
  };
  function RecognizerRegistry$findRepetitionsPerGroup$lambda(closure$allMatches) {
    return function (left, right) {
      return RecognizerRegistry$Distance$Companion_getInstance().between_vosn64$(left, right).matchesInRange_oz4rjz$(closure$allMatches);
    };
  }
  function RecognizerRegistry$findRepetitionsPerGroup$lambda_0(this$RecognizerRegistry) {
    return function (left, right) {
      return this$RecognizerRegistry.findSameMatchesWith_0(left.element, right.element);
    };
  }
  RecognizerRegistry.prototype.findRepetitionsPerGroup_0 = function (allMatches, groupedMatches) {
    var possibleRepetitions = this.combine_0(this.combine_0(groupedMatches, RecognizerRegistry$findRepetitionsPerGroup$lambda(allMatches)), RecognizerRegistry$findRepetitionsPerGroup$lambda_0(this));
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = possibleRepetitions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!element.element.isEmpty())
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var startMatch = item.leftParent.leftParent;
      var mainMatches = listOf_0([item.element.get_za3lpa$(0), item.leftParent.rightParent]);
      tmp$_1.call(destination_0, new SimpleRecognizer('Combination [' + startMatch.recognizer.name + ' + ' + mainMatches.get_za3lpa$(0).recognizer.name + ']', '(' + startMatch.patterns.get_za3lpa$(0) + '(' + mainMatches.get_za3lpa$(0).patterns.get_za3lpa$(0) + mainMatches.get_za3lpa$(1).patterns.get_za3lpa$(0) + ')+)'));
    }
    return toSet(destination_0);
  };
  function RecognizerRegistry$findSameMatchesWith$filterForRanges($receiver, count) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.ranges.size === count)
        destination.add_11rb$(element);
    }
    return destination;
  }
  function RecognizerRegistry$findSameMatchesWith$mostLeft($receiver) {
    var tmp$;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = element.ranges;
      addAll(destination, list);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(item.first);
    }
    return (tmp$ = minOrNull(destination_0)) != null ? tmp$ : -2147483648;
  }
  function RecognizerRegistry$findSameMatchesWith$mostRight($receiver) {
    var tmp$;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = element.ranges;
      addAll(destination, list);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(item.last);
    }
    return (tmp$ = maxOrNull(destination_0)) != null ? tmp$ : 2147483647;
  }
  function RecognizerRegistry$findSameMatchesWith$findFullMatch($receiver, first, last) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.ranges.get_za3lpa$(0).first === first && element.ranges.get_za3lpa$(0).last === last)
        destination.add_11rb$(element);
    }
    return destination;
  }
  RecognizerRegistry.prototype.findSameMatchesWith_0 = function ($receiver, other) {
    if ($receiver.isEmpty() || other.isEmpty()) {
      return emptyList();
    }var filterForRanges = RecognizerRegistry$findSameMatchesWith$filterForRanges;
    var mostLeft = RecognizerRegistry$findSameMatchesWith$mostLeft;
    var mostRight = RecognizerRegistry$findSameMatchesWith$mostRight;
    var findFullMatch = RecognizerRegistry$findSameMatchesWith$findFullMatch;
    var leftMatches = filterForRanges($receiver, 1);
    var rightMatches = filterForRanges(other, 1);
    var leftMin = mostLeft(leftMatches);
    var leftMax = mostRight(leftMatches);
    var rightMin = mostLeft(rightMatches);
    var rightMax = mostRight(rightMatches);
    var leftPossibles = findFullMatch(leftMatches, leftMin, leftMax);
    var rightPossibles = findFullMatch(rightMatches, rightMin, rightMax);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = leftPossibles.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var destination_0 = ArrayList_init(collectionSizeOrDefault(rightPossibles, 10));
      var tmp$_0;
      tmp$_0 = rightPossibles.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(element, item));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    var destination_1 = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      if (equals(element_0.first.recognizer, element_0.second.recognizer))
        destination_1.add_11rb$(element_0);
    }
    var destination_2 = ArrayList_init_0();
    var tmp$_2;
    tmp$_2 = destination_1.iterator();
    while (tmp$_2.hasNext()) {
      var element_1 = tmp$_2.next();
      if (!Kotlin.isType(element_1.first.recognizer, EchoRecognizer) || (Kotlin.isType(element_1.first.recognizer, EchoRecognizer) && equals(element_1.first.patterns.get_za3lpa$(0), element_1.second.patterns.get_za3lpa$(0))))
        destination_2.add_11rb$(element_1);
    }
    var destination_3 = ArrayList_init(collectionSizeOrDefault(destination_2, 10));
    var tmp$_3;
    tmp$_3 = destination_2.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_3.add_11rb$(item_0.first);
    }
    return destination_3;
  };
  function RecognizerRegistry$Distance(first, last) {
    RecognizerRegistry$Distance$Companion_getInstance();
    this.first = first;
    this.last = last;
  }
  RecognizerRegistry$Distance.prototype.matchesInRange_oz4rjz$ = function (matches) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = matches.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.ranges.size === 1)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.ranges.get_za3lpa$(0).first >= this.first && element_0.ranges.get_za3lpa$(0).last <= this.last)
        destination_0.add_11rb$(element_0);
    }
    return destination_0;
  };
  function RecognizerRegistry$Distance$Companion() {
    RecognizerRegistry$Distance$Companion_instance = this;
  }
  RecognizerRegistry$Distance$Companion.prototype.between_vosn64$ = function (predecessor, successor) {
    return new RecognizerRegistry$Distance(predecessor.last + 1 | 0, successor.first - 1 | 0);
  };
  RecognizerRegistry$Distance$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RecognizerRegistry$Distance$Companion_instance = null;
  function RecognizerRegistry$Distance$Companion_getInstance() {
    if (RecognizerRegistry$Distance$Companion_instance === null) {
      new RecognizerRegistry$Distance$Companion();
    }return RecognizerRegistry$Distance$Companion_instance;
  }
  RecognizerRegistry$Distance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Distance',
    interfaces: []
  };
  RecognizerRegistry$Distance.prototype.component1 = function () {
    return this.first;
  };
  RecognizerRegistry$Distance.prototype.component2 = function () {
    return this.last;
  };
  RecognizerRegistry$Distance.prototype.copy_vux9f0$ = function (first, last) {
    return new RecognizerRegistry$Distance(first === void 0 ? this.first : first, last === void 0 ? this.last : last);
  };
  RecognizerRegistry$Distance.prototype.toString = function () {
    return 'Distance(first=' + Kotlin.toString(this.first) + (', last=' + Kotlin.toString(this.last)) + ')';
  };
  RecognizerRegistry$Distance.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.first) | 0;
    result = result * 31 + Kotlin.hashCode(this.last) | 0;
    return result;
  };
  RecognizerRegistry$Distance.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.first, other.first) && Kotlin.equals(this.last, other.last)))));
  };
  function RecognizerRegistry$Combination(leftIndex, rightIndex, leftParent, rightParent, element) {
    this.leftIndex = leftIndex;
    this.rightIndex = rightIndex;
    this.leftParent = leftParent;
    this.rightParent = rightParent;
    this.element = element;
  }
  RecognizerRegistry$Combination.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Combination',
    interfaces: []
  };
  RecognizerRegistry$Combination.prototype.component1 = function () {
    return this.leftIndex;
  };
  RecognizerRegistry$Combination.prototype.component2 = function () {
    return this.rightIndex;
  };
  RecognizerRegistry$Combination.prototype.component3 = function () {
    return this.leftParent;
  };
  RecognizerRegistry$Combination.prototype.component4 = function () {
    return this.rightParent;
  };
  RecognizerRegistry$Combination.prototype.component5 = function () {
    return this.element;
  };
  RecognizerRegistry$Combination.prototype.copy_juhu02$ = function (leftIndex, rightIndex, leftParent, rightParent, element) {
    return new RecognizerRegistry$Combination(leftIndex === void 0 ? this.leftIndex : leftIndex, rightIndex === void 0 ? this.rightIndex : rightIndex, leftParent === void 0 ? this.leftParent : leftParent, rightParent === void 0 ? this.rightParent : rightParent, element === void 0 ? this.element : element);
  };
  RecognizerRegistry$Combination.prototype.toString = function () {
    return 'Combination(leftIndex=' + Kotlin.toString(this.leftIndex) + (', rightIndex=' + Kotlin.toString(this.rightIndex)) + (', leftParent=' + Kotlin.toString(this.leftParent)) + (', rightParent=' + Kotlin.toString(this.rightParent)) + (', element=' + Kotlin.toString(this.element)) + ')';
  };
  RecognizerRegistry$Combination.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.leftIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.rightIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.leftParent) | 0;
    result = result * 31 + Kotlin.hashCode(this.rightParent) | 0;
    result = result * 31 + Kotlin.hashCode(this.element) | 0;
    return result;
  };
  RecognizerRegistry$Combination.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.leftIndex, other.leftIndex) && Kotlin.equals(this.rightIndex, other.rightIndex) && Kotlin.equals(this.leftParent, other.leftParent) && Kotlin.equals(this.rightParent, other.rightParent) && Kotlin.equals(this.element, other.element)))));
  };
  RecognizerRegistry.prototype.combine_0 = function ($receiver, combiner) {
    var $receiver_0 = until(1, $receiver.size);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var left = $receiver.get_za3lpa$(item - 1 | 0);
      var right = $receiver.get_za3lpa$(item);
      tmp$_0.call(destination, new RecognizerRegistry$Combination(item - 1 | 0, item, left, right, combiner(left, right)));
    }
    return destination;
  };
  RecognizerRegistry.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RecognizerRegistry',
    interfaces: []
  };
  var RecognizerRegistry_instance = null;
  function RecognizerRegistry_getInstance() {
    if (RecognizerRegistry_instance === null) {
      new RecognizerRegistry();
    }return RecognizerRegistry_instance;
  }
  function RegexCache() {
    RegexCache_instance = this;
    this.patternToRegex_0 = LinkedHashMap_init_0();
  }
  RegexCache.prototype.get_61zpoe$ = function (pattern) {
    var $receiver = this.patternToRegex_0;
    var tmp$;
    var value = $receiver.get_11rb$(pattern);
    if (value == null) {
      var answer = Regex_init(pattern);
      $receiver.put_xwzc9p$(pattern, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  RegexCache.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RegexCache',
    interfaces: []
  };
  var RegexCache_instance = null;
  function RegexCache_getInstance() {
    if (RegexCache_instance === null) {
      new RegexCache();
    }return RegexCache_instance;
  }
  function RepeatingRecognizer(name, description, active, repetitionStart, repetitionMain) {
    if (description === void 0)
      description = null;
    if (active === void 0)
      active = true;
    this.name_rwsuyj$_0 = name;
    this.description_zdd75a$_0 = description;
    this.active_3py63k$_0 = active;
    this.repetitionStart_0 = repetitionStart;
    this.repetitionMain_0 = repetitionMain;
  }
  Object.defineProperty(RepeatingRecognizer.prototype, 'name', {
    get: function () {
      return this.name_rwsuyj$_0;
    }
  });
  Object.defineProperty(RepeatingRecognizer.prototype, 'description', {
    get: function () {
      return this.description_zdd75a$_0;
    }
  });
  Object.defineProperty(RepeatingRecognizer.prototype, 'active', {
    get: function () {
      return this.active_3py63k$_0;
    }
  });
  RepeatingRecognizer.prototype.findMatches_61zpoe$ = function (input) {
    return emptyList();
  };
  RepeatingRecognizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RepeatingRecognizer',
    interfaces: [Recognizer]
  };
  function SimpleRecognizer(name, outputPattern, description, active, searchPattern, mainGroupIndex) {
    if (description === void 0)
      description = null;
    if (active === void 0)
      active = true;
    if (searchPattern === void 0)
      searchPattern = null;
    if (mainGroupIndex === void 0)
      mainGroupIndex = 1;
    this.name_dn1z7s$_0 = name;
    this.outputPattern_0 = outputPattern;
    this.description_l8a38b$_0 = description;
    this.active_8xsxxv$_0 = active;
    this.searchPattern_0 = searchPattern;
    this.mainGroupIndex_0 = mainGroupIndex;
    var tmp$, tmp$_0;
    this.searchRegex_0 = RegexCache_getInstance().get_61zpoe$((tmp$_0 = (tmp$ = this.searchPattern_0) != null ? replace(tmp$, '%s', this.outputPattern_0) : null) != null ? tmp$_0 : '(' + this.outputPattern_0 + ')');
  }
  Object.defineProperty(SimpleRecognizer.prototype, 'name', {
    get: function () {
      return this.name_dn1z7s$_0;
    }
  });
  Object.defineProperty(SimpleRecognizer.prototype, 'description', {
    get: function () {
      return this.description_l8a38b$_0;
    }
  });
  Object.defineProperty(SimpleRecognizer.prototype, 'active', {
    get: function () {
      return this.active_8xsxxv$_0;
    }
  });
  function SimpleRecognizer$findMatches$lambda(this$SimpleRecognizer) {
    return function (result) {
      return new RecognizerMatch(listOf(this$SimpleRecognizer.outputPattern_0), listOf(this$SimpleRecognizer.getMainGroupRange_0(result)), this$SimpleRecognizer, this$SimpleRecognizer.name);
    };
  }
  SimpleRecognizer.prototype.findMatches_61zpoe$ = function (input) {
    return toList(map(this.searchRegex_0.findAll_905azu$(input), SimpleRecognizer$findMatches$lambda(this)));
  };
  SimpleRecognizer.prototype.getMainGroupValue_0 = function (result) {
    var tmp$, tmp$_0;
    tmp$_0 = (tmp$ = result.groups.get_za3lpa$(this.mainGroupIndex_0)) != null ? tmp$.value : null;
    if (tmp$_0 == null) {
      throw Exception_init('Unable to find group with index ' + this.mainGroupIndex_0 + '.');
    }return tmp$_0;
  };
  SimpleRecognizer.prototype.getMainGroupRange_0 = function (result) {
    var mainGroupValue = this.getMainGroupValue_0(result);
    var start = indexOf(result.value, mainGroupValue);
    return new IntRange(result.range.first + start | 0, result.range.first + start + mainGroupValue.length - 1 | 0);
  };
  SimpleRecognizer.prototype.equals = function (other) {
    return Kotlin.isType(other, SimpleRecognizer) && equals(this.name, other.name) && equals(this.outputPattern_0, other.outputPattern_0) && equals(this.searchPattern_0, other.searchPattern_0);
  };
  SimpleRecognizer.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    var result = hashCode(this.name);
    result = (31 * result | 0) + hashCode(this.outputPattern_0) | 0;
    result = (31 * result | 0) + ((tmp$_0 = (tmp$ = this.searchPattern_0) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : 0) | 0;
    return result;
  };
  SimpleRecognizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleRecognizer',
    interfaces: [Recognizer]
  };
  function ApplicationSettings() {
    ApplicationSettings_instance = this;
    this.KEY_CONSENT_0 = 'consent';
    this.KEY_COMBINER_OPTIONS_0 = 'combiner.options';
    this.KEY_LAST_VERSION_0 = 'user.lastVersion';
    this.VAL_VERSION_0 = 3;
    this.intermediate_0 = LinkedHashMap_init_0();
    if (!this.hasUserConsent) {
      this.loadIntermediateFromLocalStorage_0();
      localStorage.clear();
    }}
  ApplicationSettings.prototype.persistIntermediate_0 = function () {
    var tmp$;
    tmp$ = this.intermediate_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.set_0(element.key, element.value);
    }
    this.intermediate_0.clear();
  };
  ApplicationSettings.prototype.loadIntermediateFromLocalStorage_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = localStorage.length;
    for (var i = 0; i < tmp$; i++) {
      if ((tmp$_0 = localStorage.key(i)) != null) {
        var tmp$_1;
        if ((tmp$_1 = localStorage.getItem(tmp$_0)) != null) {
          this.intermediate_0.put_xwzc9p$(tmp$_0, tmp$_1);
        }}}
  };
  ApplicationSettings.prototype.get_0 = function (key) {
    var tmp$;
    return (tmp$ = this.intermediate_0.get_11rb$(key)) != null ? tmp$ : localStorage.getItem(key);
  };
  ApplicationSettings.prototype.set_0 = function (key, value) {
    if (this.hasUserConsent) {
      localStorage.setItem(key, value);
    } else {
      this.intermediate_0.put_xwzc9p$(key, value);
    }
  };
  ApplicationSettings.prototype.set_1 = function (key, value) {
    this.set_0(key, value.toString());
  };
  ApplicationSettings.prototype.set_2 = function (key, value) {
    this.set_0(key, value.toString());
  };
  ApplicationSettings.prototype.isNewUser = function () {
    var tmp$, tmp$_0;
    return ((tmp$_0 = (tmp$ = this.get_0(this.KEY_LAST_VERSION_0)) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0) < 3;
  };
  ApplicationSettings.prototype.storeUserLastInfo = function () {
    this.set_1(this.KEY_LAST_VERSION_0, 3);
  };
  Object.defineProperty(ApplicationSettings.prototype, 'hasUserConsent', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.get_0(this.KEY_CONSENT_0)) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : false;
    },
    set: function (value) {
      this.set_2(this.KEY_CONSENT_0, value);
      if (value) {
        this.persistIntermediate_0();
      } else {
        this.loadIntermediateFromLocalStorage_0();
      }
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'viewOptions', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.get_0(this.KEY_COMBINER_OPTIONS_0)) != null ? JSON.parse(tmp$) : null) != null ? tmp$_0 : new RecognizerCombiner$Options();
    },
    set: function (value) {
      this.set_0(this.KEY_COMBINER_OPTIONS_0, JSON.stringify(value));
    }
  });
  ApplicationSettings.prototype.toLanguageExpandedProperty_0 = function (language) {
    return 'language.' + language + '.expanded';
  };
  ApplicationSettings.prototype.isLanguageExpanded_61zpoe$ = function (language) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.get_0(this.toLanguageExpandedProperty_0(language))) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : false;
  };
  ApplicationSettings.prototype.setLanguageExpanded_ivxn3r$ = function (language, expanded) {
    this.set_2(this.toLanguageExpandedProperty_0(language), expanded);
  };
  ApplicationSettings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ApplicationSettings',
    interfaces: []
  };
  var ApplicationSettings_instance = null;
  function ApplicationSettings_getInstance() {
    if (ApplicationSettings_instance === null) {
      new ApplicationSettings();
    }return ApplicationSettings_instance;
  }
  function CookieBanner() {
    CookieBanner_instance = this;
    this.ID_DIV_COOKIE_0 = 'rg_container_cookie';
    this.ID_BTN_ACCEPT_0 = 'rg_btn_cookie_accept';
    this.ID_BTN_REJECT_0 = 'rg_btn_cookie_reject';
    var id = this.ID_DIV_COOKIE_0;
    var getElementById_359kph$result;
    var tmp$;
    try {
      getElementById_359kph$result = Kotlin.isType(tmp$ = document.getElementById(id), HTMLDivElement) ? tmp$ : throwCCE();
    } catch (e) {
      if (Kotlin.isType(e, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id + "'.", e);
      } else
        throw e;
    }
    this.ctnCookie_0 = getElementById_359kph$result;
  }
  function CookieBanner$initialize$lambda(this$CookieBanner) {
    return function (it) {
      ApplicationSettings_getInstance().hasUserConsent = true;
      this$CookieBanner.hideBanner_0();
      return Unit;
    };
  }
  function CookieBanner$initialize$lambda_0(this$CookieBanner) {
    return function (it) {
      this$CookieBanner.hideBanner_0();
      return Unit;
    };
  }
  CookieBanner.prototype.initialize = function () {
    if (ApplicationSettings_getInstance().hasUserConsent) {
      this.hideBanner_0();
    } else {
      var id = this.ID_BTN_ACCEPT_0;
      var getElementById_359kph$result;
      var tmp$;
      try {
        getElementById_359kph$result = Kotlin.isType(tmp$ = document.getElementById(id), HTMLButtonElement) ? tmp$ : throwCCE();
      } catch (e) {
        if (Kotlin.isType(e, ClassCastException)) {
          throw new RuntimeException_init_0("Unable to find element with id '" + id + "'.", e);
        } else
          throw e;
      }
      var btnAccept = getElementById_359kph$result;
      var id_0 = this.ID_BTN_REJECT_0;
      var getElementById_359kph$result_0;
      var tmp$_0;
      try {
        getElementById_359kph$result_0 = Kotlin.isType(tmp$_0 = document.getElementById(id_0), HTMLButtonElement) ? tmp$_0 : throwCCE();
      } catch (e_0) {
        if (Kotlin.isType(e_0, ClassCastException)) {
          throw new RuntimeException_init_0("Unable to find element with id '" + id_0 + "'.", e_0);
        } else
          throw e_0;
      }
      var btnReject = getElementById_359kph$result_0;
      btnAccept.onclick = CookieBanner$initialize$lambda(this);
      btnReject.onclick = CookieBanner$initialize$lambda_0(this);
    }
  };
  CookieBanner.prototype.hideBanner_0 = function () {
    $(this.ctnCookie_0).hide();
  };
  CookieBanner.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CookieBanner',
    interfaces: []
  };
  var CookieBanner_instance = null;
  function CookieBanner_getInstance() {
    if (CookieBanner_instance === null) {
      new CookieBanner();
    }return CookieBanner_instance;
  }
  function DisplayContract() {
  }
  function DisplayContract$View() {
  }
  DisplayContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function DisplayContract$Controller() {
  }
  DisplayContract$Controller.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Controller',
    interfaces: []
  };
  DisplayContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DisplayContract',
    interfaces: []
  };
  function HtmlHelper() {
    HtmlHelper_instance = this;
  }
  HtmlHelper.prototype.getElementById_359kph$ = defineInlineFunction('regex-generator.org.olafneumann.regex.generator.ui.HtmlHelper.getElementById_359kph$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var RuntimeException_init = Kotlin.kotlin.RuntimeException;
    var ClassCastException = Kotlin.kotlin.ClassCastException;
    return function (T_0, isT, id) {
      var tmp$;
      try {
        return isT(tmp$ = document.getElementById(id)) ? tmp$ : throwCCE();
      } catch (e) {
        if (Kotlin.isType(e, ClassCastException)) {
          throw new RuntimeException_init("Unable to find element with id '" + id + "'.", e);
        } else
          throw e;
      }
    };
  }));
  HtmlHelper.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlHelper',
    interfaces: []
  };
  var HtmlHelper_instance = null;
  function HtmlHelper_getInstance() {
    if (HtmlHelper_instance === null) {
      new HtmlHelper();
    }return HtmlHelper_instance;
  }
  function LinkHandler(link, codeGenerator) {
    this.link_0 = link;
    this.codeGenerator_0 = codeGenerator;
  }
  LinkHandler.prototype.setPattern_wa467u$ = function (pattern, options) {
    this.link_0.href = this.codeGenerator_0.generateCode_wa467u$(pattern, options).snippet;
  };
  LinkHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkHandler',
    interfaces: []
  };
  function visitAndFinalize$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function span$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda($receiver) {
    return Unit;
  }
  function visit$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function a$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda_0($receiver) {
    return Unit;
  }
  function HtmlView(presenter) {
    HtmlView$Companion_getInstance();
    this.presenter_0 = presenter;
    var id = HtmlView$Companion_getInstance().ID_INPUT_ELEMENT;
    var getElementById_359kph$result;
    var tmp$;
    try {
      getElementById_359kph$result = Kotlin.isType(tmp$ = document.getElementById(id), HTMLInputElement) ? tmp$ : throwCCE();
    } catch (e) {
      if (Kotlin.isType(e, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id + "'.", e);
      } else
        throw e;
    }
    this.textInput_0 = getElementById_359kph$result;
    var id_0 = HtmlView$Companion_getInstance().ID_TEXT_DISPLAY;
    var getElementById_359kph$result_0;
    var tmp$_0;
    try {
      getElementById_359kph$result_0 = Kotlin.isType(tmp$_0 = document.getElementById(id_0), HTMLDivElement) ? tmp$_0 : throwCCE();
    } catch (e_0) {
      if (Kotlin.isType(e_0, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_0 + "'.", e_0);
      } else
        throw e_0;
    }
    this.textDisplay_0 = getElementById_359kph$result_0;
    var id_1 = HtmlView$Companion_getInstance().ID_ROW_CONTAINER;
    var getElementById_359kph$result_1;
    var tmp$_1;
    try {
      getElementById_359kph$result_1 = Kotlin.isType(tmp$_1 = document.getElementById(id_1), HTMLDivElement) ? tmp$_1 : throwCCE();
    } catch (e_1) {
      if (Kotlin.isType(e_1, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_1 + "'.", e_1);
      } else
        throw e_1;
    }
    this.rowContainer_0 = getElementById_359kph$result_1;
    var id_2 = HtmlView$Companion_getInstance().ID_RESULT_DISPLAY;
    var getElementById_359kph$result_2;
    var tmp$_2;
    try {
      getElementById_359kph$result_2 = Kotlin.isType(tmp$_2 = document.getElementById(id_2), HTMLDivElement) ? tmp$_2 : throwCCE();
    } catch (e_2) {
      if (Kotlin.isType(e_2, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_2 + "'.", e_2);
      } else
        throw e_2;
    }
    this.resultDisplay_0 = getElementById_359kph$result_2;
    var id_3 = HtmlView$Companion_getInstance().ID_BUTTON_COPY;
    var getElementById_359kph$result_3;
    var tmp$_3;
    try {
      getElementById_359kph$result_3 = Kotlin.isType(tmp$_3 = document.getElementById(id_3), HTMLButtonElement) ? tmp$_3 : throwCCE();
    } catch (e_3) {
      if (Kotlin.isType(e_3, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_3 + "'.", e_3);
      } else
        throw e_3;
    }
    this.buttonCopy_0 = getElementById_359kph$result_3;
    var id_4 = HtmlView$Companion_getInstance().ID_BUTTON_HELP;
    var getElementById_359kph$result_4;
    var tmp$_4;
    try {
      getElementById_359kph$result_4 = Kotlin.isType(tmp$_4 = document.getElementById(id_4), HTMLAnchorElement) ? tmp$_4 : throwCCE();
    } catch (e_4) {
      if (Kotlin.isType(e_4, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_4 + "'.", e_4);
      } else
        throw e_4;
    }
    this.buttonHelp_0 = getElementById_359kph$result_4;
    var id_5 = HtmlView$Companion_getInstance().ID_CHECK_ONLY_MATCHES;
    var getElementById_359kph$result_5;
    var tmp$_5;
    try {
      getElementById_359kph$result_5 = Kotlin.isType(tmp$_5 = document.getElementById(id_5), HTMLInputElement) ? tmp$_5 : throwCCE();
    } catch (e_5) {
      if (Kotlin.isType(e_5, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_5 + "'.", e_5);
      } else
        throw e_5;
    }
    this.checkOnlyMatches_0 = getElementById_359kph$result_5;
    var id_6 = HtmlView$Companion_getInstance().ID_CHECK_WHOLELINE;
    var getElementById_359kph$result_6;
    var tmp$_6;
    try {
      getElementById_359kph$result_6 = Kotlin.isType(tmp$_6 = document.getElementById(id_6), HTMLInputElement) ? tmp$_6 : throwCCE();
    } catch (e_6) {
      if (Kotlin.isType(e_6, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_6 + "'.", e_6);
      } else
        throw e_6;
    }
    this.checkWholeLine_0 = getElementById_359kph$result_6;
    var id_7 = HtmlView$Companion_getInstance().ID_CHECK_CASE_INSENSITIVE;
    var getElementById_359kph$result_7;
    var tmp$_7;
    try {
      getElementById_359kph$result_7 = Kotlin.isType(tmp$_7 = document.getElementById(id_7), HTMLInputElement) ? tmp$_7 : throwCCE();
    } catch (e_7) {
      if (Kotlin.isType(e_7, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_7 + "'.", e_7);
      } else
        throw e_7;
    }
    this.checkCaseInsensitive_0 = getElementById_359kph$result_7;
    var id_8 = HtmlView$Companion_getInstance().ID_CHECK_DOT_MATCHES_LINE_BRAKES;
    var getElementById_359kph$result_8;
    var tmp$_8;
    try {
      getElementById_359kph$result_8 = Kotlin.isType(tmp$_8 = document.getElementById(id_8), HTMLInputElement) ? tmp$_8 : throwCCE();
    } catch (e_8) {
      if (Kotlin.isType(e_8, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_8 + "'.", e_8);
      } else
        throw e_8;
    }
    this.checkDotAll_0 = getElementById_359kph$result_8;
    var id_9 = HtmlView$Companion_getInstance().ID_CHECK_MULTILINE;
    var getElementById_359kph$result_9;
    var tmp$_9;
    try {
      getElementById_359kph$result_9 = Kotlin.isType(tmp$_9 = document.getElementById(id_9), HTMLInputElement) ? tmp$_9 : throwCCE();
    } catch (e_9) {
      if (Kotlin.isType(e_9, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_9 + "'.", e_9);
      } else
        throw e_9;
    }
    this.checkMultiline_0 = getElementById_359kph$result_9;
    var id_10 = HtmlView$Companion_getInstance().ID_DIV_LANGUAGES;
    var getElementById_359kph$result_10;
    var tmp$_10;
    try {
      getElementById_359kph$result_10 = Kotlin.isType(tmp$_10 = document.getElementById(id_10), HTMLDivElement) ? tmp$_10 : throwCCE();
    } catch (e_10) {
      if (Kotlin.isType(e_10, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_10 + "'.", e_10);
      } else
        throw e_10;
    }
    this.containerLanguages_0 = getElementById_359kph$result_10;
    var id_11 = HtmlView$Companion_getInstance().ID_ANCHOR_REGEX101;
    var getElementById_359kph$result_11;
    var tmp$_11;
    try {
      getElementById_359kph$result_11 = Kotlin.isType(tmp$_11 = document.getElementById(id_11), HTMLAnchorElement) ? tmp$_11 : throwCCE();
    } catch (e_11) {
      if (Kotlin.isType(e_11, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_11 + "'.", e_11);
      } else
        throw e_11;
    }
    this.anchorRegex101_0 = new LinkHandler(getElementById_359kph$result_11, new UrlGenerator('Regex101', 'https://regex101.com/?regex=%1$s&flags=g%2$s&delimiter=/'));
    var id_12 = HtmlView$Companion_getInstance().ID_ANCHOR_REGEXR;
    var getElementById_359kph$result_12;
    var tmp$_12;
    try {
      getElementById_359kph$result_12 = Kotlin.isType(tmp$_12 = document.getElementById(id_12), HTMLAnchorElement) ? tmp$_12 : throwCCE();
    } catch (e_12) {
      if (Kotlin.isType(e_12, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_12 + "'.", e_12);
      } else
        throw e_12;
    }
    this.anchorRegexr_0 = new LinkHandler(getElementById_359kph$result_12, new UrlGenerator('Regexr', 'https://regexr.com/?expression=%1$s&text='));
    this.matchPresenterToRowIndex_0 = LinkedHashMap_init_0();
    this.inputCharacterSpans_0 = emptyList();
    var $receiver = CodeGenerator$Companion_getInstance().all;
    var result = LinkedHashMap_init(coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16));
    var tmp$_13;
    tmp$_13 = $receiver.iterator();
    while (tmp$_13.hasNext()) {
      var element = tmp$_13.next();
      result.put_xwzc9p$(element, new LanguageCard(element, this.containerLanguages_0));
    }
    this.languageDisplays_0 = result;
    this.driver_0 = new Driver({});
    this.textInput_0.addEventListener(HtmlView$Companion_getInstance().EVENT_INPUT, HtmlView_init$lambda(this));
    this.buttonCopy_0.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK, HtmlView_init$lambda_0(this));
    this.buttonHelp_0.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK, HtmlView_init$lambda_1(this));
    this.checkCaseInsensitive_0.addEventListener(HtmlView$Companion_getInstance().EVENT_INPUT, HtmlView_init$lambda_2(this));
    this.checkDotAll_0.addEventListener(HtmlView$Companion_getInstance().EVENT_INPUT, HtmlView_init$lambda_3(this));
    this.checkMultiline_0.addEventListener(HtmlView$Companion_getInstance().EVENT_INPUT, HtmlView_init$lambda_4(this));
    this.checkOnlyMatches_0.addEventListener(HtmlView$Companion_getInstance().EVENT_INPUT, HtmlView_init$lambda_5(this));
    this.checkWholeLine_0.addEventListener(HtmlView$Companion_getInstance().EVENT_INPUT, HtmlView_init$lambda_6(this));
  }
  HtmlView.prototype.toCharacterUnits_0 = function ($receiver) {
    return $receiver.toString() + 'ch';
  };
  HtmlView.prototype.hideCopyButton = function () {
    $(this.buttonCopy_0).parent().remove();
  };
  HtmlView.prototype.selectInputText = function () {
    this.textInput_0.select();
  };
  Object.defineProperty(HtmlView.prototype, 'inputText', {
    configurable: true,
    get: function () {
      return this.textInput_0.value;
    },
    set: function (value) {
      this.textInput_0.value = value;
    }
  });
  function HtmlView$set_HtmlView$displayText$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(String.fromCharCode(unboxChar(closure$it)));
      return Unit;
    };
  }
  Object.defineProperty(HtmlView.prototype, 'displayText', {
    configurable: true,
    get: function () {
      return this.textDisplay_0.innerText;
    },
    set: function (value) {
      var destination = ArrayList_init(value.length);
      var tmp$;
      tmp$ = iterator(value);
      while (tmp$.hasNext()) {
        var item = unboxChar(tmp$.next());
        var tmp$_0 = destination.add_11rb$;
        var it = toBoxedChar(item);
        var $receiver = get_create(document);
        var tmp$_1;
        tmp$_0.call(destination, Kotlin.isType(tmp$_1 = visitTagAndFinalize(new SPAN_init(attributesMapOf('class', 'rg-char'), $receiver), $receiver, visitAndFinalize$lambda(HtmlView$set_HtmlView$displayText$lambda$lambda(it))), HTMLSpanElement_0) ? tmp$_1 : throwCCE());
      }
      this.inputCharacterSpans_0 = toList_0(destination);
      clear(this.textDisplay_0);
      var tmp$_2;
      tmp$_2 = this.inputCharacterSpans_0.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        this.textDisplay_0.appendChild(element);
      }
    }
  });
  Object.defineProperty(HtmlView.prototype, 'resultText', {
    configurable: true,
    get: function () {
      return this.resultDisplay_0.innerText;
    },
    set: function (value) {
      this.resultDisplay_0.innerText = value;
      this.anchorRegex101_0.setPattern_wa467u$(value, this.options);
      this.anchorRegexr_0.setPattern_wa467u$(value, this.options);
    }
  });
  function HtmlView$showResults$nextCssClass(closure$indices) {
    return function (row) {
      var tmp$;
      var $receiver = closure$indices;
      var value = ((tmp$ = closure$indices.get_11rb$(row)) != null ? tmp$ : row) + 1 | 0;
      $receiver.put_xwzc9p$(row, value);
      return HtmlView$Companion_getInstance().MATCH_PRESENTER_CSS_CLASS.get_za3lpa$(ensureNotNull(closure$indices.get_11rb$(row)) % HtmlView$Companion_getInstance().MATCH_PRESENTER_CSS_CLASS.size);
    };
  }
  HtmlView.prototype.showResults_70lhc2$ = function (matches) {
    var indices = LinkedHashMap_init_0();
    var nextCssClass = HtmlView$showResults$nextCssClass(indices);
    clear(this.rowContainer_0);
    this.matchPresenterToRowIndex_0.clear();
    this.matchPresenterToRowIndex_0.putAll_a2k3zr$(this.distributeToRows_0(matches));
    var rowElements = LinkedHashMap_init_0();
    var tmp$;
    tmp$ = this.matchPresenterToRowIndex_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var matchPresenter = element.key;
      var rowIndex = element.value;
      var tmp$_0;
      var value = (tmp$_0 = rowElements.get_11rb$(rowIndex)) != null ? tmp$_0 : this.createRowElement_0();
      rowElements.put_xwzc9p$(rowIndex, value);
      var rowElement = ensureNotNull(rowElements.get_11rb$(rowIndex));
      var cssClass = nextCssClass(rowIndex);
      var element_0 = this.createMatchPresenterElement_0(matchPresenter);
      rowElement.appendChild(element_0);
      this.applyCssStyling_0(matchPresenter, element_0, cssClass);
      this.applyListenersForUserInput_0(matchPresenter, element_0, cssClass);
    }
    this.animateResultDisplaySize_0(rowElements);
  };
  function HtmlView$distributeToRows$createNextLine(closure$lines) {
    return function () {
      closure$lines.add_11rb$(0);
      return closure$lines.size - 1 | 0;
    };
  }
  HtmlView.prototype.distributeToRows_0 = function (matches) {
    var lines = ArrayList_init_0();
    var createNextLine = HtmlView$distributeToRows$createNextLine(lines);
    var $receiver = sortedWith(matches, MatchPresenter$Companion_getInstance().byPriorityAndPosition);
    var result = LinkedHashMap_init(coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16));
    var tmp$;
    tmp$ = $receiver.iterator();
    loop_label: while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0 = result.put_xwzc9p$;
      var indexOfFirst$result;
      indexOfFirst$break: do {
        var tmp$_1;
        var index = 0;
        tmp$_1 = lines.iterator();
        while (tmp$_1.hasNext()) {
          var item = tmp$_1.next();
          if (item < element.first) {
            indexOfFirst$result = index;
            break indexOfFirst$break;
          }index = index + 1 | 0;
        }
        indexOfFirst$result = -1;
      }
       while (false);
      var indexOfFreeLine = indexOfFirst$result;
      var line = indexOfFreeLine >= 0 ? indexOfFreeLine : createNextLine();
      lines.set_wxm5ur$(line, element.last);
      tmp$_0.call(result, element, line);
    }
    return result;
  };
  HtmlView.prototype.createRowElement_0 = function () {
    var tmp$;
    var tmp$_0 = this.rowContainer_0;
    var $receiver = get_create(document);
    var classes = HtmlView$Companion_getInstance().CLASS_MATCH_ROW;
    var tmp$_1;
    return Kotlin.isType(tmp$ = tmp$_0.appendChild(Kotlin.isType(tmp$_1 = visitTagAndFinalize(new DIV_init(attributesMapOf('class', classes), $receiver), $receiver, visitAndFinalize$lambda_0(div$lambda)), HTMLDivElement_0) ? tmp$_1 : throwCCE()), HTMLDivElement) ? tmp$ : throwCCE();
  };
  function HtmlView$createMatchPresenterElement$lambda$lambda$lambda$lambda$lambda$lambda(this$HtmlView, closure$match) {
    return function (event) {
      this$HtmlView.presenter_0.onSuggestionClick_hdji9c$(closure$match);
      event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$createMatchPresenterElement$lambda$lambda$lambda$lambda$lambda(closure$match, this$HtmlView) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$match.title);
      set_onClickFunction($receiver, HtmlView$createMatchPresenterElement$lambda$lambda$lambda$lambda$lambda$lambda(this$HtmlView, closure$match));
      return Unit;
    };
  }
  function HtmlView$createMatchPresenterElement$lambda$lambda$lambda$lambda(closure$match, this$HtmlView) {
    return function ($receiver) {
      var block = HtmlView$createMatchPresenterElement$lambda$lambda$lambda$lambda$lambda(closure$match, this$HtmlView);
      visitTag(new A_init(attributesMapOf_0(['href', null, 'target', null, 'class', null]), $receiver.consumer), visit$lambda(block));
      return Unit;
    };
  }
  function HtmlView$createMatchPresenterElement$lambda$lambda(closure$matchPresenter, this$HtmlView) {
    return function ($receiver) {
      var $receiver_0 = closure$matchPresenter.recognizerMatches;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$HtmlView_0 = this$HtmlView;
        visitTag(new DIV_init(attributesMapOf('class', 'rg-recognizer'), $receiver.consumer), visit$lambda_0(HtmlView$createMatchPresenterElement$lambda$lambda$lambda$lambda(element, this$HtmlView_0)));
      }
      return Unit;
    };
  }
  function HtmlView$createMatchPresenterElement$lambda$lambda_0(closure$matchPresenter, this$HtmlView) {
    return function (it) {
      var tmp$;
      if (closure$matchPresenter.selected) {
        if ((tmp$ = closure$matchPresenter.selectedMatch) != null) {
          this$HtmlView.presenter_0.onSuggestionClick_hdji9c$(tmp$);
        }} else if (closure$matchPresenter.recognizerMatches.size === 1)
        this$HtmlView.presenter_0.onSuggestionClick_hdji9c$(closure$matchPresenter.recognizerMatches.iterator().next());
      return Unit;
    };
  }
  function HtmlView$createMatchPresenterElement$lambda(closure$matchPresenter, this$HtmlView) {
    return function ($receiver) {
      var classes = 'rg-match-item-overlay';
      var block = HtmlView$createMatchPresenterElement$lambda$lambda(closure$matchPresenter, this$HtmlView);
      visitTag(new DIV_init(attributesMapOf('class', classes), $receiver.consumer), visit$lambda_0(block));
      set_onClickFunction($receiver, HtmlView$createMatchPresenterElement$lambda$lambda_0(closure$matchPresenter, this$HtmlView));
      return Unit;
    };
  }
  HtmlView.prototype.createMatchPresenterElement_0 = function (matchPresenter) {
    var $receiver = get_create(document);
    var classes = HtmlView$Companion_getInstance().CLASS_MATCH_ITEM;
    var tmp$;
    return Kotlin.isType(tmp$ = visitTagAndFinalize(new DIV_init(attributesMapOf('class', classes), $receiver), $receiver, visitAndFinalize$lambda_0(HtmlView$createMatchPresenterElement$lambda(matchPresenter, this))), HTMLDivElement_0) ? tmp$ : throwCCE();
  };
  function HtmlView$applyCssStyling$lambda(closure$element, closure$matchPresenter, this$HtmlView) {
    return function (selected) {
      closure$element.classList.toggle(HtmlView$Companion_getInstance().CLASS_ITEM_SELECTED, selected);
      var $this = closure$matchPresenter;
      var $receiver = $this.ranges;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var list = element;
        addAll(destination, list);
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        this$HtmlView.inputCharacterSpans_0.get_za3lpa$(element_0).classList.toggle(HtmlView$Companion_getInstance().CLASS_CHAR_SELECTED, selected);
      }
      return Unit;
    };
  }
  function HtmlView$applyCssStyling$lambda_0(closure$element) {
    return function (deactivated) {
      closure$element.classList.toggle(HtmlView$Companion_getInstance().CLASS_ITEM_NOT_AVAILABLE, deactivated);
      return Unit;
    };
  }
  HtmlView.prototype.applyCssStyling_0 = function (matchPresenter, element, cssClass) {
    addClass(element, [cssClass]);
    element.style.left = this.toCharacterUnits_0(matchPresenter.first);
    element.style.width = this.toCharacterUnits_0(matchPresenter.length);
    if (matchPresenter.ranges.size === 2) {
      element.style.borderLeftWidth = this.toCharacterUnits_0(matchPresenter.ranges.get_za3lpa$(0).last - matchPresenter.ranges.get_za3lpa$(0).first + 1 | 0);
      element.style.borderRightWidth = this.toCharacterUnits_0(matchPresenter.ranges.get_za3lpa$(1).last - matchPresenter.ranges.get_za3lpa$(1).first + 1 | 0);
    }element.classList.toggle(HtmlView$Companion_getInstance().CLASS_ITEM_SELECTED, matchPresenter.selected);
    element.classList.toggle(HtmlView$Companion_getInstance().CLASS_ITEM_NOT_AVAILABLE, matchPresenter.deactivated);
    matchPresenter.onSelectedChanged = HtmlView$applyCssStyling$lambda(element, matchPresenter, this);
    matchPresenter.onDeactivatedChanged = HtmlView$applyCssStyling$lambda_0(element);
  };
  function HtmlView$applyListenersForUserInput$lambda(closure$matchPresenter, this$HtmlView, closure$cssClass) {
    return function (it) {
      if (closure$matchPresenter.availableForHighlight) {
        var $this = closure$matchPresenter;
        var $receiver = $this.ranges;
        var destination = ArrayList_init_0();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          var list = element;
          addAll(destination, list);
        }
        var tmp$_0;
        tmp$_0 = destination.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          var this$HtmlView_0 = this$HtmlView;
          var closure$cssClass_0 = closure$cssClass;
          addClass(this$HtmlView_0.inputCharacterSpans_0.get_za3lpa$(element_0), [closure$cssClass_0]);
        }
      }return Unit;
    };
  }
  function HtmlView$applyListenersForUserInput$lambda_0(closure$matchPresenter, this$HtmlView, closure$cssClass) {
    return function (it) {
      if (closure$matchPresenter.availableForHighlight) {
        var $this = closure$matchPresenter;
        var $receiver = $this.ranges;
        var destination = ArrayList_init_0();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          var list = element;
          addAll(destination, list);
        }
        var tmp$_0;
        tmp$_0 = destination.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          var this$HtmlView_0 = this$HtmlView;
          var closure$cssClass_0 = closure$cssClass;
          removeClass(this$HtmlView_0.inputCharacterSpans_0.get_za3lpa$(element_0), [closure$cssClass_0]);
        }
      }return Unit;
    };
  }
  HtmlView.prototype.applyListenersForUserInput_0 = function (matchPresenter, element, cssClass) {
    element.addEventListener(HtmlView$Companion_getInstance().EVENT_MOUSE_ENTER, HtmlView$applyListenersForUserInput$lambda(matchPresenter, this, cssClass));
    element.addEventListener(HtmlView$Companion_getInstance().EVENT_MOUSE_LEAVE, HtmlView$applyListenersForUserInput$lambda_0(matchPresenter, this, cssClass));
  };
  HtmlView.prototype.animateResultDisplaySize_0 = function (rows) {
    var newHeight = this.computeMatchPresenterAreaHeight_0(rows).toString() + 'px';
    var jqRowContainer = $(this.rowContainer_0);
    jqRowContainer.stop();
    jqRowContainer.animate(json([to('height', newHeight)]), 350);
  };
  HtmlView.prototype.computeMatchPresenterAreaHeight_0 = function (rows) {
    var tmp$;
    var destination = ArrayList_init(rows.size);
    var tmp$_0;
    tmp$_0 = rows.entries.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(this.computeMatchPresenterBottomLine_0(item.key, item.value));
    }
    return 8 + ((tmp$ = maxOrNull(destination)) != null ? tmp$ : 0) | 0;
  };
  HtmlView.prototype.computeMatchPresenterBottomLine_0 = function (rowIndex, element) {
    var jqElement = $(element);
    var overlayHeight = this.getHeight_0(jqElement.find('.rg-match-item-overlay'));
    var parentHeight = jqElement.height();
    return overlayHeight + Kotlin.imul(parentHeight, rowIndex + 1 | 0) | 0;
  };
  function HtmlView$getHeight$lambda(closure$maxHeight) {
    return function (jq) {
      var tmp$ = closure$maxHeight;
      var a = closure$maxHeight.v;
      var b = jq.height();
      tmp$.v = JsMath.max(a, b);
      return Unit;
    };
  }
  HtmlView.prototype.getHeight_0 = function (elements) {
    var previousCss = elements.attr('style');
    elements.css('position:absolute;visibility:hidden;display:block !important;');
    var maxHeight = {v: 0};
    HtmlView$Companion_getInstance().each_nnoasy$(elements, HtmlView$getHeight$lambda(maxHeight));
    elements.attr('style', previousCss != null ? previousCss : '');
    return maxHeight.v;
  };
  Object.defineProperty(HtmlView.prototype, 'options', {
    configurable: true,
    get: function () {
      return new RecognizerCombiner$Options(this.checkOnlyMatches_0.checked, this.checkWholeLine_0.checked, this.checkCaseInsensitive_0.checked, this.checkDotAll_0.checked, this.checkMultiline_0.checked);
    },
    set: function (value) {
      this.checkOnlyMatches_0.checked = value.onlyPatterns;
      this.checkWholeLine_0.checked = value.matchWholeLine;
      this.checkCaseInsensitive_0.checked = value.caseSensitive;
      this.checkDotAll_0.checked = value.dotMatchesLineBreaks;
      this.checkMultiline_0.checked = value.multiline;
    }
  });
  HtmlView.prototype.showGeneratedCodeForPattern_61zpoe$ = function (pattern) {
    var options = this.options;
    var tmp$;
    tmp$ = CodeGenerator$Companion_getInstance().all.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      (tmp$_0 = this.languageDisplays_0.get_11rb$(element)) != null ? (tmp$_0.setSnippet_kygme1$(element.generateCode_wa467u$(pattern, options)), Unit) : null;
    }
    Prism.highlightAll();
  };
  HtmlView.prototype.showUserGuide_6taknv$ = function (initialStep) {
    this.driver_0.reset();
    defineSteps(this.driver_0, listOf_0([new StepDefinition('#rg-title', new Popover('New to Regex Generator', "Hi! It looks like you're new to <em>Regex Generator<\/em>. Let us show you how to use this tool.", 'right')), new StepDefinition('#rg_input_container', new Popover('Sample', 'In the first step we need an example, so please write or paste an example of the text you want to recognize with your regex.', 'bottom-center')), new StepDefinition('#rg_result_container', new Popover('Recognition', 'Regex Generator will immediately analyze your text and suggest common patterns you may use.', 'top-center')), new StepDefinition('#rg_row_container', new Popover('Suggestions', 'Click one or more of suggested patterns...', 'top')), new StepDefinition('#rg_result_display_box', new Popover('Result', '... and we will generate a first <em>regular expression<\/em> for you. It should be able to match your input text.', 'top-center')), new StepDefinition('#rg_language_accordion', new Popover('Language snippets', 'We will also generate snippets for some languages that show you, how to use the regular expression in your favourite language.', 'top-left'))]));
    this.driver_0.start(initialStep ? 0 : 1);
  };
  function HtmlView$Companion() {
    HtmlView$Companion_instance = this;
    this.CLASS_MATCH_ROW = 'rg-match-row';
    this.CLASS_MATCH_ITEM = 'rg-match-item';
    this.CLASS_ITEM_SELECTED = 'rg-item-selected';
    this.CLASS_CHAR_SELECTED = 'rg-char-selected';
    this.CLASS_ITEM_NOT_AVAILABLE = 'rg-item-not-available';
    this.EVENT_CLICK = 'click';
    this.EVENT_INPUT = 'input';
    this.EVENT_MOUSE_ENTER = 'mouseenter';
    this.EVENT_MOUSE_LEAVE = 'mouseleave';
    this.ID_INPUT_ELEMENT = 'rg_raw_input_text';
    this.ID_TEXT_DISPLAY = 'rg_text_display';
    this.ID_RESULT_DISPLAY = 'rg_result_display';
    this.ID_ROW_CONTAINER = 'rg_row_container';
    this.ID_CONTAINER_INPUT = 'rg_input_container';
    this.ID_CHECK_ONLY_MATCHES = 'rg_onlymatches';
    this.ID_CHECK_WHOLELINE = 'rg_matchwholeline';
    this.ID_CHECK_CASE_INSENSITIVE = 'rg_caseinsensitive';
    this.ID_CHECK_DOT_MATCHES_LINE_BRAKES = 'rg_dotmatcheslinebreakes';
    this.ID_CHECK_MULTILINE = 'rg_multiline';
    this.ID_BUTTON_COPY = 'rg_button_copy';
    this.ID_BUTTON_HELP = 'rg_button_show_help';
    this.ID_DIV_LANGUAGES = 'rg_language_accordion';
    this.ID_ANCHOR_REGEX101 = 'rg_anchor_regex101';
    this.ID_ANCHOR_REGEXR = 'rg_anchor_regexr';
    this.MATCH_PRESENTER_CSS_CLASS = listOf_0(['bg-primary', 'bg-success', 'bg-danger', 'bg-warning']);
    this.MAGIC_HEIGHT = 8;
  }
  function HtmlView$Companion$each$lambda(closure$function) {
    return function (f, htmlElement) {
      closure$function($(htmlElement));
      return Unit;
    };
  }
  HtmlView$Companion.prototype.each_nnoasy$ = function ($receiver, function_0) {
    $receiver.each(HtmlView$Companion$each$lambda(function_0));
  };
  HtmlView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HtmlView$Companion_instance = null;
  function HtmlView$Companion_getInstance() {
    if (HtmlView$Companion_instance === null) {
      new HtmlView$Companion();
    }return HtmlView$Companion_instance;
  }
  function HtmlView_init$lambda(this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.onInputChanges_61zpoe$(this$HtmlView.inputText);
      return Unit;
    };
  }
  function HtmlView_init$lambda_0(this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.onButtonCopyClick();
      return Unit;
    };
  }
  function HtmlView_init$lambda_1(this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.onButtonHelpClick();
      return Unit;
    };
  }
  function HtmlView_init$lambda_2(this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.onOptionsChange_ow7xd4$(this$HtmlView.options);
      return Unit;
    };
  }
  function HtmlView_init$lambda_3(this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.onOptionsChange_ow7xd4$(this$HtmlView.options);
      return Unit;
    };
  }
  function HtmlView_init$lambda_4(this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.onOptionsChange_ow7xd4$(this$HtmlView.options);
      return Unit;
    };
  }
  function HtmlView_init$lambda_5(this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.onOptionsChange_ow7xd4$(this$HtmlView.options);
      return Unit;
    };
  }
  function HtmlView_init$lambda_6(this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.onOptionsChange_ow7xd4$(this$HtmlView.options);
      return Unit;
    };
  }
  HtmlView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlView',
    interfaces: [DisplayContract$View]
  };
  function visitAndFinalize$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda_1($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_2(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function p$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function button$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_2(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function code$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_3(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function pre$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_4(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda_2($receiver) {
    return Unit;
  }
  function LanguageCard(codeGenerator, parent) {
    this.codeGenerator_0 = codeGenerator;
    this.bodyElement_0 = null;
    this.codeElement_0 = null;
    this.warnings_0 = ArrayList_init_0();
    var tmp$, tmp$_0;
    var $receiver = get_create(document);
    var tmp$_1;
    parent.appendChild(Kotlin.isType(tmp$_1 = visitTagAndFinalize(new DIV_init(attributesMapOf('class', 'card'), $receiver), $receiver, visitAndFinalize$lambda_1(LanguageCard_init$lambda(this))), HTMLDivElement_0) ? tmp$_1 : throwCCE());
    this.codeElement_0 = Kotlin.isType(tmp$ = document.getElementById(this.codeElementId_0), HTMLElement) ? tmp$ : throwCCE();
    this.bodyElement_0 = Kotlin.isType(tmp$_0 = document.getElementById(this.bodyElementId_0), HTMLElement) ? tmp$_0 : throwCCE();
    $(this.bodyElement_0).on('shown.bs.collapse', LanguageCard_init$lambda_0(this));
    $(this.bodyElement_0).on('hidden.bs.collapse', LanguageCard_init$lambda_1(this));
  }
  Object.defineProperty(LanguageCard.prototype, 'bodyElementId_0', {
    configurable: true,
    get: function () {
      return this.codeGenerator_0.uniqueName + '_body';
    }
  });
  Object.defineProperty(LanguageCard.prototype, 'codeElementId_0', {
    configurable: true,
    get: function () {
      return this.codeGenerator_0.uniqueName + '_code';
    }
  });
  Object.defineProperty(LanguageCard.prototype, 'shown_0', {
    configurable: true,
    get: function () {
      return ApplicationSettings_getInstance().isLanguageExpanded_61zpoe$(this.codeGenerator_0.uniqueName);
    },
    set: function (value) {
      ApplicationSettings_getInstance().setLanguageExpanded_ivxn3r$(this.codeGenerator_0.uniqueName, value);
    }
  });
  LanguageCard.prototype.setSnippet_kygme1$ = function (snippet) {
    this.code_0 = snippet.snippet;
    var tmp$;
    tmp$ = this.warnings_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      (tmp$_0 = element.parentElement) != null ? tmp$_0.removeChild(element) : null;
    }
    this.warnings_0.clear();
    var tmp$_1;
    tmp$_1 = snippet.warnings.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var warningElement = this.createWarning_0(element_0);
      this.warnings_0.add_11rb$(warningElement);
      this.bodyElement_0.prepend(warningElement);
    }
  };
  function LanguageCard$createWarning$lambda(closure$text) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$text);
      return Unit;
    };
  }
  LanguageCard.prototype.createWarning_0 = function (text) {
    var $receiver = get_create(document);
    return visitTagAndFinalize(new P_init(attributesMapOf('class', 'alert alert-warning rounded m-2'), $receiver), $receiver, visitAndFinalize$lambda_2(LanguageCard$createWarning$lambda(text)));
  };
  Object.defineProperty(LanguageCard.prototype, 'code_0', {
    configurable: true,
    get: function () {
      return this.codeElement_0.innerHTML;
    },
    set: function (value) {
      this.codeElement_0.innerHTML = this.escapeHTML_0(value);
    }
  });
  LanguageCard.prototype.escapeHTML_0 = function ($receiver) {
    var text = $receiver;
    if (text.length === 0)
      return text;
    var $receiver_0 = StringBuilder_init_0($receiver.length);
    var tmp$;
    tmp$ = iterator(text);
    while (tmp$.hasNext()) {
      var element = unboxChar(tmp$.next());
      var ch = element;
      switch (ch) {
        case 39:
          $receiver_0.append_pdl1vj$('&apos;');
          break;
        case 34:
          $receiver_0.append_pdl1vj$('&quot');
          break;
        case 38:
          $receiver_0.append_pdl1vj$('&amp;');
          break;
        case 60:
          $receiver_0.append_pdl1vj$('&lt;');
          break;
        case 62:
          $receiver_0.append_pdl1vj$('&gt;');
          break;
        default:$receiver_0.append_s8itvh$(ch);
          break;
      }
    }
    return $receiver_0.toString();
  };
  function LanguageCard_init$lambda$lambda$lambda(this$LanguageCard) {
    return function ($receiver) {
      var $receiver_0 = $receiver.attributes;
      var key = 'data-toggle';
      var value = 'collapse';
      $receiver_0.put_xwzc9p$(key, value);
      var $receiver_1 = $receiver.attributes;
      var key_0 = 'data-target';
      var value_0 = '#' + this$LanguageCard.bodyElementId_0;
      $receiver_1.put_xwzc9p$(key_0, value_0);
      $receiver.unaryPlus_pdl1vz$(this$LanguageCard.codeGenerator_0.languageName);
      return Unit;
    };
  }
  function LanguageCard_init$lambda$lambda(this$LanguageCard) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = ButtonType.button;
      tmp$_0 = LanguageCard_init$lambda$lambda$lambda(this$LanguageCard);
      visitTag(new BUTTON_init(attributesMapOf_0(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', tmp$ != null ? enumEncode(tmp$) : null, 'class', 'btn btn-link']), $receiver.consumer), visit$lambda_1(tmp$_0));
      return Unit;
    };
  }
  function LanguageCard_init$lambda$lambda$lambda$lambda(this$LanguageCard) {
    return function ($receiver) {
      set_id($receiver, this$LanguageCard.codeElementId_0);
      return Unit;
    };
  }
  function LanguageCard_init$lambda$lambda$lambda_0(this$LanguageCard) {
    return function ($receiver) {
      var classes = 'language-' + this$LanguageCard.codeGenerator_0.highlightLanguage;
      var block = LanguageCard_init$lambda$lambda$lambda$lambda(this$LanguageCard);
      visitTag(new CODE_init(attributesMapOf('class', classes), $receiver.consumer), visit$lambda_2(block));
      return Unit;
    };
  }
  function LanguageCard_init$lambda$lambda_0(this$LanguageCard) {
    return function ($receiver) {
      set_id($receiver, this$LanguageCard.bodyElementId_0);
      var block = LanguageCard_init$lambda$lambda$lambda_0(this$LanguageCard);
      visitTag(new PRE_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda_3(block));
      return Unit;
    };
  }
  function LanguageCard_init$lambda(this$LanguageCard) {
    return function ($receiver) {
      var classes = 'card-header';
      var block = LanguageCard_init$lambda$lambda(this$LanguageCard);
      visitTag(new DIV_init(attributesMapOf('class', classes), $receiver.consumer), visit$lambda_4(block));
      var classes_0 = 'collapse ' + (this$LanguageCard.shown_0 ? 'show' : '');
      var block_0 = LanguageCard_init$lambda$lambda_0(this$LanguageCard);
      visitTag(new DIV_init(attributesMapOf('class', classes_0), $receiver.consumer), visit$lambda_4(block_0));
      return Unit;
    };
  }
  function LanguageCard_init$lambda_0(this$LanguageCard) {
    return function () {
      this$LanguageCard.shown_0 = true;
      return Unit;
    };
  }
  function LanguageCard_init$lambda_1(this$LanguageCard) {
    return function () {
      this$LanguageCard.shown_0 = false;
      return Unit;
    };
  }
  LanguageCard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LanguageCard',
    interfaces: []
  };
  Delegates$observable$ObjectLiteral.prototype = Object.create(ObservableProperty.prototype);
  Delegates$observable$ObjectLiteral.prototype.constructor = Delegates$observable$ObjectLiteral;
  function Delegates$observable$ObjectLiteral(closure$onChange, initialValue) {
    this.closure$onChange = closure$onChange;
    ObservableProperty.call(this, initialValue);
  }
  Delegates$observable$ObjectLiteral.prototype.afterChange_jxtfl0$ = function (property, oldValue, newValue) {
    this.closure$onChange(property, oldValue, newValue);
  };
  Delegates$observable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [ObservableProperty]};
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function MatchPresenter(recognizerMatches, selectedMatch, deactivated, onSelectedChanged, onDeactivatedChanged) {
    MatchPresenter$Companion_getInstance();
    if (selectedMatch === void 0)
      selectedMatch = null;
    if (deactivated === void 0)
      deactivated = false;
    if (onSelectedChanged === void 0)
      onSelectedChanged = MatchPresenter_init$lambda;
    if (onDeactivatedChanged === void 0)
      onDeactivatedChanged = MatchPresenter_init$lambda_0;
    this.recognizerMatches = recognizerMatches;
    this.onSelectedChanged = onSelectedChanged;
    this.onDeactivatedChanged = onDeactivatedChanged;
    this.ranges = null;
    var tmp$;
    if (this.recognizerMatches.isEmpty()) {
      throw IllegalArgumentException_init('Empty MatchPresenter is not allowed.');
    }var listOfMatches = toList_0(this.recognizerMatches);
    tmp$ = listOfMatches.size;
    for (var i = 1; i < tmp$; i++) {
      if (!listOfMatches.get_za3lpa$(0).hasSameRangesAs_hdji9c$(listOfMatches.get_za3lpa$(i))) {
        throw IllegalArgumentException_init('All RecognizerMatches in a MatchPresenter must have the same ranges.');
      }}
    this.ranges = listOfMatches.get_za3lpa$(0).ranges;
    var iterator = this.ranges.iterator();
    if (!iterator.hasNext())
      throw NoSuchElementException_init();
    var minValue = iterator.next().first;
    while (iterator.hasNext()) {
      var v = iterator.next().first;
      if (Kotlin.compareTo(minValue, v) > 0) {
        minValue = v;
      }}
    this.first_s5fbd1$_0 = minValue;
    var iterator_0 = this.ranges.iterator();
    if (!iterator_0.hasNext())
      throw NoSuchElementException_init();
    var maxValue = iterator_0.next().last;
    while (iterator_0.hasNext()) {
      var v_0 = iterator_0.next().last;
      if (Kotlin.compareTo(maxValue, v_0) < 0) {
        maxValue = v_0;
      }}
    this.last_zuk3t$_0 = maxValue;
    var iterator_1 = this.recognizerMatches.iterator();
    if (!iterator_1.hasNext())
      throw NoSuchElementException_init();
    var maxValue_0 = iterator_1.next().priority;
    while (iterator_1.hasNext()) {
      var v_1 = iterator_1.next().priority;
      if (Kotlin.compareTo(maxValue_0, v_1) < 0) {
        maxValue_0 = v_1;
      }}
    this.priority = maxValue_0;
    this.selectedMatch_jdvp1$_0 = new Delegates$observable$ObjectLiteral(MatchPresenter$selectedMatch$lambda(this), selectedMatch);
    this.deactivated_26wo5h$_0 = new Delegates$observable$ObjectLiteral(MatchPresenter$deactivated$lambda(this), deactivated);
  }
  Object.defineProperty(MatchPresenter.prototype, 'first', {
    configurable: true,
    get: function () {
      return this.first_s5fbd1$_0;
    }
  });
  Object.defineProperty(MatchPresenter.prototype, 'last', {
    configurable: true,
    get: function () {
      return this.last_zuk3t$_0;
    }
  });
  var MatchPresenter$selectedMatch_metadata = new PropertyMetadata('selectedMatch');
  Object.defineProperty(MatchPresenter.prototype, 'selectedMatch', {
    configurable: true,
    get: function () {
      return this.selectedMatch_jdvp1$_0.getValue_lrcp0p$(this, MatchPresenter$selectedMatch_metadata);
    },
    set: function (selectedMatch) {
      this.selectedMatch_jdvp1$_0.setValue_9rddgb$(this, MatchPresenter$selectedMatch_metadata, selectedMatch);
    }
  });
  Object.defineProperty(MatchPresenter.prototype, 'selected', {
    configurable: true,
    get: function () {
      return this.selectedMatch != null;
    }
  });
  var MatchPresenter$deactivated_metadata = new PropertyMetadata('deactivated');
  Object.defineProperty(MatchPresenter.prototype, 'deactivated', {
    configurable: true,
    get: function () {
      return this.deactivated_26wo5h$_0.getValue_lrcp0p$(this, MatchPresenter$deactivated_metadata);
    },
    set: function (deactivated) {
      this.deactivated_26wo5h$_0.setValue_9rddgb$(this, MatchPresenter$deactivated_metadata, deactivated);
    }
  });
  Object.defineProperty(MatchPresenter.prototype, 'availableForHighlight', {
    configurable: true,
    get: function () {
      return !this.deactivated && !this.selected;
    }
  });
  MatchPresenter.prototype.intersect_w0mx77$ = function (other) {
    var $receiver = this.ranges;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = other.ranges;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(element, item));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    var any$result;
    any$break: do {
      var tmp$_1;
      if (Kotlin.isType(destination, Collection) && destination.isEmpty()) {
        any$result = false;
        break any$break;
      }tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        if (!intersect(element_0.first, element_0.second).isEmpty()) {
          any$result = true;
          break any$break;
        }}
      any$result = false;
    }
     while (false);
    return any$result;
  };
  MatchPresenter.prototype.forEachIndexInRanges_b4k9x1$ = defineInlineFunction('regex-generator.org.olafneumann.regex.generator.ui.MatchPresenter.forEachIndexInRanges_b4k9x1$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
    return function (action) {
      var $receiver = this.ranges;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var list = element;
        addAll(destination, list);
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        action(element_0);
      }
    };
  }));
  function MatchPresenter$Companion() {
    MatchPresenter$Companion_instance = this;
    this.byPriority_0 = new Comparator(compareByDescending$lambda(MatchPresenter$Companion$byPriority$lambda));
    this.byPriorityAndPosition = then(this.byPriority_0, HasRange$Companion_getInstance().byPosition);
  }
  function MatchPresenter$Companion$byPriority$lambda(it) {
    return it.priority;
  }
  MatchPresenter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MatchPresenter$Companion_instance = null;
  function MatchPresenter$Companion_getInstance() {
    if (MatchPresenter$Companion_instance === null) {
      new MatchPresenter$Companion();
    }return MatchPresenter$Companion_instance;
  }
  function MatchPresenter_init$lambda(it) {
    return Unit;
  }
  function MatchPresenter_init$lambda_0(it) {
    return Unit;
  }
  function MatchPresenter$selectedMatch$lambda(this$MatchPresenter) {
    return function (f, f_0, new_0) {
      this$MatchPresenter.onSelectedChanged(new_0 != null);
      return Unit;
    };
  }
  function MatchPresenter$deactivated$lambda(this$MatchPresenter) {
    return function (f, f_0, new_0) {
      this$MatchPresenter.onDeactivatedChanged(new_0);
      return Unit;
    };
  }
  MatchPresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchPresenter',
    interfaces: [HasRange]
  };
  function UiController() {
    UiController$Companion_getInstance();
    this.view_0 = new HtmlView(this);
    this.matches_0 = emptyList();
    if (equals(navigator.clipboard, undefined)) {
      this.view_0.hideCopyButton();
    }CookieBanner_getInstance().initialize();
    this.view_0.options = ApplicationSettings_getInstance().viewOptions;
  }
  Object.defineProperty(UiController.prototype, 'currentTextInput_0', {
    configurable: true,
    get: function () {
      return this.view_0.inputText;
    }
  });
  UiController.prototype.toPresentation_0 = function ($receiver) {
    var tmp$;
    var $receiver_0 = this.matches_0;
    var lastOrNull$result;
    lastOrNull$break: do {
      var iterator = $receiver_0.listIterator_za3lpa$($receiver_0.size);
      while (iterator.hasPrevious()) {
        var element = iterator.previous();
        if (element.recognizerMatches.containsAll_brywnq$($receiver) && $receiver.containsAll_brywnq$(element.recognizerMatches)) {
          lastOrNull$result = element;
          break lastOrNull$break;
        }}
      lastOrNull$result = null;
    }
     while (false);
    return (tmp$ = lastOrNull$result) != null ? tmp$ : new MatchPresenter($receiver);
  };
  UiController.prototype.initialize = function () {
    var $receiver = this.currentTextInput_0;
    var initialInput = isBlank($receiver) ? UiController$Companion_getInstance().VAL_EXAMPLE_INPUT : $receiver;
    this.recognizeMatches_0(initialInput);
  };
  UiController.prototype.recognizeMatches_0 = function (input) {
    if (input === void 0)
      input = this.currentTextInput_0;
    this.view_0.inputText = input;
    this.onInputChanges_61zpoe$(input);
    this.view_0.selectInputText();
  };
  function UiController$onButtonCopyClick$lambda(it) {
    window.alert('Could not copy text: ' + it);
    return Unit;
  }
  UiController.prototype.onButtonCopyClick = function () {
    navigator.clipboard.writeText(this.view_0.resultText).catch(UiController$onButtonCopyClick$lambda);
  };
  UiController.prototype.onButtonHelpClick = function () {
    this.view_0.showUserGuide_6taknv$(false);
  };
  UiController.prototype.showInitialUserGuide = function () {
    this.view_0.showUserGuide_6taknv$(true);
  };
  UiController.prototype.onInputChanges_61zpoe$ = function (newInput) {
    var matchGroups = this.groupMatches_0(RecognizerRegistry_getInstance().findMatches_61zpoe$(newInput));
    var destination = ArrayList_init(collectionSizeOrDefault(matchGroups, 10));
    var tmp$;
    tmp$ = matchGroups.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.toPresentation_0(item));
    }
    this.matches_0 = destination;
    this.view_0.displayText = newInput;
    this.view_0.showResults_70lhc2$(this.matches_0);
    this.computeOutputPattern_0();
  };
  UiController.prototype.groupMatches_0 = function (matches) {
    var destination = LinkedHashMap_init_0();
    var tmp$;
    tmp$ = matches.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.ranges;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      } else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    return destination.values;
  };
  UiController.prototype.onSuggestionClick_hdji9c$ = function (recognizerMatch) {
    var $receiver = this.matches_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.recognizerMatches.contains_11rb$(recognizerMatch)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    var matchPresenter = firstOrNull$result;
    if (matchPresenter == null || matchPresenter.deactivated) {
      return;
    }matchPresenter.selectedMatch = matchPresenter.selected ? null : recognizerMatch;
    var $receiver_0 = this.matches_0;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (element_0.selected)
        destination.add_11rb$(element_0);
    }
    var selectedMatches = destination;
    var $receiver_1 = this.matches_0;
    var destination_0 = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      if (!element_1.selected)
        destination_0.add_11rb$(element_1);
    }
    var tmp$_2;
    tmp$_2 = destination_0.iterator();
    loop_label: while (tmp$_2.hasNext()) {
      var element_2 = tmp$_2.next();
      var any$result;
      any$break: do {
        var tmp$_3;
        if (Kotlin.isType(selectedMatches, Collection) && selectedMatches.isEmpty()) {
          any$result = false;
          break any$break;
        }tmp$_3 = selectedMatches.iterator();
        while (tmp$_3.hasNext()) {
          var element_3 = tmp$_3.next();
          if (element_2.intersect_w0mx77$(element_3)) {
            any$result = true;
            break any$break;
          }}
        any$result = false;
      }
       while (false);
      element_2.deactivated = any$result;
    }
    this.computeOutputPattern_0();
  };
  UiController.prototype.onOptionsChange_ow7xd4$ = function (options) {
    ApplicationSettings_getInstance().viewOptions = options;
    this.computeOutputPattern_0();
  };
  UiController.prototype.computeOutputPattern_0 = function () {
    var tmp$ = RecognizerCombiner$Companion_getInstance();
    var tmp$_0 = this.view_0.inputText;
    var $receiver = this.matches_0;
    var destination = ArrayList_init_0();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = element.selectedMatch) != null) {
        destination.add_11rb$(tmp$_0_0);
      }}
    var result = tmp$.combine_9yx9zl$(tmp$_0, toList_0(destination), this.view_0.options);
    this.view_0.resultText = result.pattern;
    this.view_0.showGeneratedCodeForPattern_61zpoe$(result.pattern);
  };
  function UiController$Companion() {
    UiController$Companion_instance = this;
    this.VAL_EXAMPLE_INPUT = "2020-03-12T13:34:56.123Z INFO  [org.example.Class]: This is a #simple #logline containing a 'value'.";
  }
  UiController$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UiController$Companion_instance = null;
  function UiController$Companion_getInstance() {
    if (UiController$Companion_instance === null) {
      new UiController$Companion();
    }return UiController$Companion_instance;
  }
  UiController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UiController',
    interfaces: [DisplayContract$Controller]
  };
  var compareBy$lambda_1 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var compareByDescending$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function HasRange() {
    HasRange$Companion_getInstance();
  }
  Object.defineProperty(HasRange.prototype, 'length', {
    configurable: true,
    get: function () {
      return this.last - this.first + 1 | 0;
    }
  });
  function HasRange$Companion() {
    HasRange$Companion_instance = this;
    this.byIndex_0 = new Comparator(compareBy$lambda_1(HasRange$Companion$byIndex$lambda));
    this.byLength_0 = new Comparator(compareByDescending$lambda_0(HasRange$Companion$byLength$lambda));
    this.byPosition = then(this.byIndex_0, this.byLength_0);
  }
  function HasRange$Companion$byIndex$lambda(it) {
    return it.first;
  }
  function HasRange$Companion$byLength$lambda(it) {
    return it.length;
  }
  HasRange$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HasRange$Companion_instance = null;
  function HasRange$Companion_getInstance() {
    if (HasRange$Companion_instance === null) {
      new HasRange$Companion();
    }return HasRange$Companion_instance;
  }
  HasRange.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasRange',
    interfaces: []
  };
  var package$org = _.org || (_.org = {});
  var package$olafneumann = package$org.olafneumann || (package$org.olafneumann = {});
  var package$regex = package$olafneumann.regex || (package$olafneumann.regex = {});
  var package$generator = package$regex.generator || (package$regex.generator = {});
  package$generator.main = main;
  var package$js = package$generator.js || (package$generator.js = {});
  package$js.StepDefinition = StepDefinition;
  package$js.Popover = Popover;
  package$js.defineSteps_es8tl7$ = defineSteps;
  BracketedRecognizer.CenterPattern = BracketedRecognizer$CenterPattern;
  var package$regex_0 = package$generator.regex || (package$generator.regex = {});
  package$regex_0.BracketedRecognizer = BracketedRecognizer;
  Object.defineProperty(CodeGenerator, 'Companion', {
    get: CodeGenerator$Companion_getInstance
  });
  CodeGenerator.GeneratedSnippet = CodeGenerator$GeneratedSnippet;
  package$regex_0.CodeGenerator = CodeGenerator;
  package$regex_0.SimpleReplacingCodeGenerator = SimpleReplacingCodeGenerator;
  package$regex_0.UrlGenerator = UrlGenerator;
  package$regex_0.JavaCodeGenerator = JavaCodeGenerator;
  package$regex_0.KotlinCodeGenerator = KotlinCodeGenerator;
  package$regex_0.PhpCodeGenerator = PhpCodeGenerator;
  package$regex_0.JavaScriptCodeGenerator = JavaScriptCodeGenerator;
  package$regex_0.GrepCodeGenerator = GrepCodeGenerator;
  package$regex_0.CSharpCodeGenerator = CSharpCodeGenerator;
  package$regex_0.RubyCodeGenerator = RubyCodeGenerator;
  package$regex_0.EchoRecognizer = EchoRecognizer;
  Object.defineProperty(package$regex_0, 'PatternHelper', {
    get: PatternHelper_getInstance
  });
  package$regex_0.Recognizer = Recognizer;
  Object.defineProperty(RecognizerCombiner, 'Companion', {
    get: RecognizerCombiner$Companion_getInstance
  });
  RecognizerCombiner.Options = RecognizerCombiner$Options;
  RecognizerCombiner.RangeToMatch = RecognizerCombiner$RangeToMatch;
  RecognizerCombiner.Frame = RecognizerCombiner$Frame;
  RecognizerCombiner.RegularExpression = RecognizerCombiner$RegularExpression;
  package$regex_0.RecognizerCombiner = RecognizerCombiner;
  package$regex_0.RecognizerMatch = RecognizerMatch;
  Object.defineProperty(package$regex_0, 'RecognizerRegistry', {
    get: RecognizerRegistry_getInstance
  });
  Object.defineProperty(package$regex_0, 'RegexCache', {
    get: RegexCache_getInstance
  });
  package$regex_0.RepeatingRecognizer = RepeatingRecognizer;
  package$regex_0.SimpleRecognizer = SimpleRecognizer;
  var package$ui = package$generator.ui || (package$generator.ui = {});
  Object.defineProperty(package$ui, 'ApplicationSettings', {
    get: ApplicationSettings_getInstance
  });
  $$importsForInline$$['regex-generator'] = _;
  Object.defineProperty(package$ui, 'CookieBanner', {
    get: CookieBanner_getInstance
  });
  DisplayContract.View = DisplayContract$View;
  DisplayContract.Controller = DisplayContract$Controller;
  package$ui.DisplayContract = DisplayContract;
  Object.defineProperty(package$ui, 'HtmlHelper', {
    get: HtmlHelper_getInstance
  });
  package$ui.LinkHandler = LinkHandler;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  Object.defineProperty(HtmlView, 'Companion', {
    get: HtmlView$Companion_getInstance
  });
  package$ui.HtmlView = HtmlView;
  package$ui.LanguageCard = LanguageCard;
  Object.defineProperty(MatchPresenter, 'Companion', {
    get: MatchPresenter$Companion_getInstance
  });
  package$ui.MatchPresenter = MatchPresenter;
  Object.defineProperty(UiController, 'Companion', {
    get: UiController$Companion_getInstance
  });
  package$ui.UiController = UiController;
  Object.defineProperty(HasRange, 'Companion', {
    get: HasRange$Companion_getInstance
  });
  var package$util = package$generator.util || (package$generator.util = {});
  package$util.HasRange = HasRange;
  Object.defineProperty(SimpleReplacingCodeGenerator.prototype, 'uniqueName', Object.getOwnPropertyDescriptor(CodeGenerator.prototype, 'uniqueName'));
  Object.defineProperty(MatchPresenter.prototype, 'length', Object.getOwnPropertyDescriptor(HasRange.prototype, 'length'));
  main();
  Kotlin.defineModule('regex-generator', _);
  return _;
}(typeof this['regex-generator'] === 'undefined' ? {} : this['regex-generator'], kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=regex-generator.js.map
