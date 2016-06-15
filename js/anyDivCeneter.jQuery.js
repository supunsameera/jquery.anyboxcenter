
(function($){
    $.fn.anyBoxCenter=function(options){
            var defaults={
            boxColor:'#3e3e3e',
            wrapColor:'#ccc',
            contColor:'#cecece',
            boxheight:300,
            boxwidth:400,
            border:'1px solid #2e2e2e',
            wrapPadding:'4px',
            borderRadius:'0',
            boxShadow:'0 0 10px 0 #000',
            zIndex:'9999'
        },
        options=$.extend(defaults,options);

      var $this = $(this);

            var eleClass=$this.prop("class");
            var eleId=$this.prop("id");
            var tagName=$this.prop("tagName").toLowerCase();
            
            var commonName;

            if(eleClass||eleClass!=''){
                commonName=eleClass+'_cls';
            }else if (eleId||eleId!='') {
                commonName=eleId+'_id';
            }else if (tagName||tagName!='') {
                commonName=tagName+'_tgn';
            }

            $this.wrap('<div class="'+commonName+'_abc_wrap"/>').parent().wrap('<div class="'+commonName+'_abc_container"/>');

            $this.css({
                'width':options.boxwidth+'px',
                'height':options.boxheight+'px'
            });

        changeCss();

        $(window).bind("resize", function() {
            changeCss();
        });

        function changeCss() {
            var winHeight = $(window).height();
            var winWidth = $(window).width();
            var boxWrapHeight = $this.height();
            var boxWrapWidth = $this.width();

            var elementTop = (winHeight - boxWrapHeight) / 2;
            var elementLeft = (winWidth - boxWrapWidth) / 2;

            $this.css({
                    'backgroundColor':options.boxColor
                })
                .parent().css({//wrapper styles
                'position': 'absolute',
                'top': elementTop + 'px',
                'left': elementLeft + 'px',
                'backgroundColor':options.wrapColor,
                'borderRadius':options.borderRadius,
                'border':options.border,
                'padding':options.wrapPadding,
                'boxShadow':options.boxShadow
                })
                .parent().css({//container styles
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'right': '0',
                'bottom': '0',
                'backgroundColor':options.contColor,
                'zIndex':options.zIndex
            });
        }
         
    }



})(jQuery);