/**
 * Created with JetBrains WebStorm.
 * User: DIOLIVEI
 * Date: 16-10-2012
 * Time: 11:45
 * To change this template use File | Settings | File Templates.
 */

function templateElement(templateId,data,destinationId,options) {
    var countRule = 0;
    var source = $("#"+templateId+"").html();
    var template = Handlebars.compile(source);
    var html = template(data);
    $("[id$="+destinationId+"]").empty();
    $("[id$="+destinationId+"]").html(html);

    if(options != undefined && options != null){
        if (data != undefined && data.rules != undefined && data.rules.length > 0) {
            var timeRules = new List(destinationId, options);
        }
    }
}