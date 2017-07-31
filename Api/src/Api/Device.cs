using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api
{
    public class Device
    {
        public int DeviceId;
        public DeviceType Type;
        public string IpAddress;

        public Device(int deviceId, string ipAddress)
        {
            DeviceId = deviceId;
            IpAddress = ipAddress;
            Type = DeviceType.LedController;
        }
    }

    public enum DeviceType
    {
        LedController
    }
}
