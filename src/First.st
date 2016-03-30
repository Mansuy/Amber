Smalltalk createPackage: 'First'!
(Smalltalk packageAt: 'First') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #First
	instanceVariableNames: ''
	package: 'First'!

!First methodsFor: 'action'!

doJQueryFirst
	'#output-list' asJQuery append: '<li>Задача.</li>'
!

doJQuerySecond
	'#output-list' asJQuery append: '<button>Hi</button>'
!

doJQuerySecond: html
	html form with: [
    html table with: [
        html tr with: [
            html td with: 'Username'.
            html td with: [html input]].
        html tr with: [
            html td with: 'Password'.
            html td with: [html input type: 'password']]]]
! !

!First methodsFor: 'starting'!

augmentPage
	'#jquery-first' asJQuery click: [ self doJQueryFirst ].
	'#jquery-second' asJQuery click: [ self doJQuerySecond ]
! !

!First class methodsFor: 'starting'!

start
	self new augmentPage
! !

