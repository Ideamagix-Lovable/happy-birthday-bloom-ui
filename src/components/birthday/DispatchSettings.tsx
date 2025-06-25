
import React, { useState } from 'react';
import { Settings, Save, RotateCcw, Bell, Clock, MapPin, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DispatchSettings = () => {
  const [settings, setSettings] = useState({
    // Lead Time Settings
    imumLeadTime: '4',
    romLeadTime: '5',
    roiLeadTime: '7',
    neLeadTime: '10',
    
    // Auto-approval Settings
    autoApprovalEnabled: true,
    autoApprovalLimit: '50000',
    
    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    whatsappNotifications: true,
    
    // Courier Settings
    defaultCourier: 'blue-dart',
    backupCourier: 'delhivery',
    
    // Cost Settings
    baseCakePrice: '350',
    emergencyDeliveryCharge: '200',
    weekendDeliveryCharge: '100',
    
    // Business Rules
    maxDailyDispatches: '500',
    blackoutDates: '',
    workingHours: {
      start: '09:00',
      end: '18:00'
    }
  });

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  const handleResetSettings = () => {
    if (confirm('Are you sure you want to reset all settings to default values?')) {
      // Reset to default values
      alert('Settings reset to default values');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Settings className="w-6 h-6 text-[#b33324]" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dispatch Settings</h1>
            <p className="text-gray-600">Configure dispatch rules and preferences</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handleResetSettings}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset to Default
          </Button>
          <Button onClick={handleSaveSettings} className="bg-[#b33324] hover:bg-[#b33324]/90">
            <Save className="w-4 h-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="lead-times" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="lead-times">Lead Times</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="couriers">Couriers</TabsTrigger>
          <TabsTrigger value="pricing">Pricing</TabsTrigger>
          <TabsTrigger value="business-rules">Business Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="lead-times" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Regional Lead Time Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      IMUM (Mumbai) Lead Time (days)
                    </label>
                    <Input 
                      type="number"
                      value={settings.imumLeadTime}
                      onChange={(e) => setSettings({...settings, imumLeadTime: e.target.value})}
                    />
                    <p className="text-xs text-gray-500 mt-1">Mumbai and nearby areas</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ROM (Rest of Maharashtra) Lead Time (days)
                    </label>
                    <Input 
                      type="number"
                      value={settings.romLeadTime}
                      onChange={(e) => setSettings({...settings, romLeadTime: e.target.value})}
                    />
                    <p className="text-xs text-gray-500 mt-1">Maharashtra excluding Mumbai</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ROI (Rest of India) Lead Time (days)
                    </label>
                    <Input 
                      type="number"
                      value={settings.roiLeadTime}
                      onChange={(e) => setSettings({...settings, roiLeadTime: e.target.value})}
                    />
                    <p className="text-xs text-gray-500 mt-1">All other Indian states</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      NE (North East) Lead Time (days)
                    </label>
                    <Input 
                      type="number"
                      value={settings.neLeadTime}
                      onChange={(e) => setSettings({...settings, neLeadTime: e.target.value})}
                    />
                    <p className="text-xs text-gray-500 mt-1">North Eastern states</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Lead Time Calculation</h4>
                <p className="text-sm text-blue-700">
                  Lead time is calculated from the dispatch date to ensure delivery before the birthday. 
                  These settings affect automatic eligibility calculations.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive email alerts for dispatch updates</p>
                  </div>
                  <Switch 
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Notifications</h4>
                    <p className="text-sm text-gray-600">Receive SMS alerts for critical updates</p>
                  </div>
                  <Switch 
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, smsNotifications: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">WhatsApp Notifications</h4>
                    <p className="text-sm text-gray-600">Receive WhatsApp updates</p>
                  </div>
                  <Switch 
                    checked={settings.whatsappNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, whatsappNotifications: checked})}
                  />
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium">Auto-Approval Settings</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">Enable Auto-Approval</h5>
                      <p className="text-sm text-gray-600">Automatically approve eligible dispatches</p>
                    </div>
                    <Switch 
                      checked={settings.autoApprovalEnabled}
                      onCheckedChange={(checked) => setSettings({...settings, autoApprovalEnabled: checked})}
                    />
                  </div>
                  
                  {settings.autoApprovalEnabled && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Auto-Approval Donation Limit (₹)
                      </label>
                      <Input 
                        type="number"
                        value={settings.autoApprovalLimit}
                        onChange={(e) => setSettings({...settings, autoApprovalLimit: e.target.value})}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Only donors with total donations above this amount will be auto-approved
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="couriers" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Courier Partner Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Default Courier Partner
                  </label>
                  <Select value={settings.defaultCourier} onValueChange={(value) => setSettings({...settings, defaultCourier: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blue-dart">Blue Dart</SelectItem>
                      <SelectItem value="delhivery">Delhivery</SelectItem>
                      <SelectItem value="xpressbees">Xpressbees</SelectItem>
                      <SelectItem value="dtdc">DTDC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Backup Courier Partner
                  </label>
                  <Select value={settings.backupCourier} onValueChange={(value) => setSettings({...settings, backupCourier: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blue-dart">Blue Dart</SelectItem>
                      <SelectItem value="delhivery">Delhivery</SelectItem>
                      <SelectItem value="xpressbees">Xpressbees</SelectItem>
                      <SelectItem value="dtdc">DTDC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-4">Courier Priority by Region</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">IMUM (Mumbai)</span>
                    <span className="text-sm text-gray-600">Blue Dart → Delhivery → DTDC</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">ROM (Maharashtra)</span>
                    <span className="text-sm text-gray-600">Delhivery → Blue Dart → Xpressbees</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">ROI (Rest of India)</span>
                    <span className="text-sm text-gray-600">Delhivery → Xpressbees → Blue Dart</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">NE (North East)</span>
                    <span className="text-sm text-gray-600">Delhivery → Blue Dart → DTDC</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pricing Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Base Cake Price (₹)
                    </label>
                    <Input 
                      type="number"
                      value={settings.baseCakePrice}
                      onChange={(e) => setSettings({...settings, baseCakePrice: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Emergency Delivery Charge (₹)
                    </label>
                    <Input 
                      type="number"
                      value={settings.emergencyDeliveryCharge}
                      onChange={(e) => setSettings({...settings, emergencyDeliveryCharge: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Weekend Delivery Charge (₹)
                    </label>
                    <Input 
                      type="number"
                      value={settings.weekendDeliveryCharge}
                      onChange={(e) => setSettings({...settings, weekendDeliveryCharge: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Max Daily Dispatches
                    </label>
                    <Input 
                      type="number"
                      value={settings.maxDailyDispatches}
                      onChange={(e) => setSettings({...settings, maxDailyDispatches: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business-rules" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Rules & Constraints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Working Hours
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input 
                        type="time"
                        value={settings.workingHours.start}
                        onChange={(e) => setSettings({
                          ...settings, 
                          workingHours: {...settings.workingHours, start: e.target.value}
                        })}
                      />
                      <p className="text-xs text-gray-500 mt-1">Start time</p>
                    </div>
                    <div>
                      <Input 
                        type="time"
                        value={settings.workingHours.end}
                        onChange={(e) => setSettings({
                          ...settings, 
                          workingHours: {...settings.workingHours, end: e.target.value}
                        })}
                      />
                      <p className="text-xs text-gray-500 mt-1">End time</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Blackout Dates
                  </label>
                  <Textarea 
                    placeholder="Enter dates when dispatch is not available (one per line)&#10;Format: YYYY-MM-DD"
                    value={settings.blackoutDates}
                    onChange={(e) => setSettings({...settings, blackoutDates: e.target.value})}
                    rows={4}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    List dates when dispatch services are unavailable (holidays, festivals, etc.)
                  </p>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Notes</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Changes to lead times affect future dispatch calculations</li>
                    <li>• Pricing changes apply to new orders only</li>
                    <li>• Working hours determine when automated processes run</li>
                    <li>• Blackout dates prevent dispatch scheduling on those days</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DispatchSettings;
