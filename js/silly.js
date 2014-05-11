var SILLY = (
    function(module) 
    { 
        module.DoIt = function(resultObject)
		{
		    resultObject.prepend("ATB : " + Date() + "<br/>");
		};
        return module;
    } (SILLY || {})
);
