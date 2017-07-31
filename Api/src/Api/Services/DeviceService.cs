using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Api.Services
{
    public class DeviceService
    {
        private static List<Device> Devices = new List<Device>();

        public void AddDevice(Device device)
        {
            Devices.Add(device);
        }

        public void ChangeColor(int address, Color color)
        {
            HttpClient client = new HttpClient();
            var deviceIp = Devices.FirstOrDefault(d => d.DeviceId == address).IpAddress;
            client.PostAsync($"http://{deviceIp}/changecolor?address=1&r={color.Red}&g={color.Green}&b={color.Blue}", null);
        }
    }
}
