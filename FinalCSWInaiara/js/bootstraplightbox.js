/*
* Bootstrap Lightbox v0.1
* Copyright 2025 Mikhail Flenov (http://www.flenov.net)
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/

var lightbox = lightbox || {};
lightbox.modal = {    
    collectImages: function() {
        self = this;
        self.links = [];
        $('[data-toggle="lightbox"]').each(function(i, selected){
          self.links[i] = $(selected).attr('src');
        });
    },
    
    showImageModal: function(control) {
        this.collectImages();
        
        var options = $(control).attr('data-option');
        this.href  = $(control).attr('data-href');
        this.target = $(control).attr('data-target');

        if (this.href === undefined) {
            this.href = $(control).attr('src');
        }

        this.imageTag = $(this.target).find(".lightbox-image");
        this.imageTag.attr('class', 'lightbox-image');
        this.imageTag.attr('src', this.href);

        if (options != undefined) {
            if (options.indexOf('fitwidth') >= 0) {
                this.imageTag.addClass('lightbox-fitwidth-image');
            }
        }

        $(this.target).modal('show');
        
        if (self.links.length == 0) {
            $(this.target).find('.lightbox-left').hide();
            $(this.target).find('.lightbox-right').hide();
        }
    },
    
    getSelectedIndex: function() {
        for (i = 0; i < this.links.length; i++) { 
            if (this.href == this.links[i]) {
                return i;
            }
        }
        return -1;
    },
    
    prev: function() {
        var index = this.getSelectedIndex() - 1;
        if (index < 0) {
            index = this.links.length - 1;
        }
        this.href = this.links[index];
        this.imageTag.attr('src', this.links[index]);
    },
    
    next: function() {
        var index = this.getSelectedIndex() + 1;
        if (index > this.links.length - 1) {
            index = 0;
        }
        this.href = this.links[index];
        this.imageTag.attr('src', this.links[index]);
    }    
};


(function ($) {
$(document).on('click', '[data-toggle="lightbox"]', function(e) 
{ e.preventDefault(); lightbox.modal.showImageModal(this); })    
}(window.jQuery));
